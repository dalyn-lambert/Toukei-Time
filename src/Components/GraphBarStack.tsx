// https://github.com/airbnb/visx/issues/1637#issuecomment-1587440404
'use client';
import { StudyDay } from '@/lib/types';
import { formatJapaneseDateWithDay, toHoursAndMinutesJapanese } from '@/lib/utils';
import { Category } from '@prisma/client';
import { AxisBottom } from '@visx/axis';
import { localPoint } from '@visx/event';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarStack } from '@visx/shape';
import { SeriesPoint } from '@visx/shape/lib/types';
import { defaultStyles, useTooltip, useTooltipInPortal } from '@visx/tooltip';

type TooltipData = {
  key: Category;
  bar: SeriesPoint<StudyDay>;
};

type BarStackProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  data: StudyDay[];
};

const defaultMargin = {
  top: 40,
  right: 0,
  bottom: 0,
  left: 0,
};

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 50,
  // base-gray
  backgroundColor: '#B7B6C1',
};

export default function GraphBarStack({ width, height, margin = defaultMargin, data }: BarStackProps) {
  const keys = Object.keys(data[0]).filter((d) => d !== 'date') as Category[];

  const studyTotals = data.reduce((allTotals, currentDate) => {
    const totalStudy = keys.reduce((dailyTotal, k) => {
      dailyTotal += Number(currentDate[k]);
      return dailyTotal;
    }, 0);
    allTotals.push(totalStudy);
    return allTotals;
  }, [] as number[]);

  // accessors
  const getDate = (d: StudyDay) => d.date;

  const formatDate = (date: string) => formatJapaneseDateWithDay(date);

  // scales
  const dateScale = scaleBand<string>({
    domain: data.map(getDate),
    padding: 0.2,
  });

  const timeScale = scaleLinear<number>({
    domain: [0, Math.max(...studyTotals)],
  });

  const colorScale = scaleOrdinal<Category, string>({
    domain: keys,
    range: ['#52489C', '#CE6D8B', '#FA8334', '#018E42', '#247BA0'],
  });

  let tooltipTimeout: number;
  const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } = useTooltip<TooltipData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // TooltipInPortal is rendered in a separate child of <body /> and positioned
    // with page coordinates which should be updated on scroll. consider using
    // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
    scroll: true,
  });

  if (width < 10) return null;
  // bounds
  const xMax = width - margin.left;
  const yMax = height - margin.top - 50;

  dateScale.rangeRound([0, xMax]);
  timeScale.range([yMax, 0]);

  return width < 10 ? null : (
    <div style={{ position: 'relative' }}>
      <svg ref={containerRef} width={width} height={height}>
        <Group top={margin.top}>
          <BarStack<StudyDay, Category>
            data={data}
            keys={keys}
            x={getDate}
            xScale={dateScale}
            yScale={timeScale}
            color={colorScale}
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    x={bar.x}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width}
                    fill={bar.color}
                    rx={10}
                    onMouseLeave={() => {
                      tooltipTimeout = window.setTimeout(() => {
                        hideTooltip();
                      }, 200);
                    }}
                    onMouseMove={(event) => {
                      if (tooltipTimeout) clearTimeout(tooltipTimeout);
                      // TooltipInPortal expects coordinates to be relative to containerRef
                      // localPoint returns coordinates relative to the nearest SVG, which
                      // is what containerRef is set to in this example.
                      const eventSvgCoords = localPoint(event);
                      const left = bar.x + bar.width / 2;
                      showTooltip({
                        tooltipData: bar,
                        tooltipTop: eventSvgCoords?.y,
                        tooltipLeft: left,
                      });
                    }}
                  />
                ))
              )
            }
          </BarStack>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          scale={dateScale}
          tickFormat={formatDate}
          stroke={'black'}
          tickStroke={'black'}
          tickLabelProps={{
            fill: 'black',
            fontSize: 11,
            textAnchor: 'middle',
          }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: margin.top / 2 - 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* <LegendOrdinal className='flex flex-wrap' scale={colorScale} direction='row' labelMargin='0 15px 0 0' /> */}
      </div>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          <div className='text-black'>
            <strong>{tooltipData.key}</strong>
          </div>
          <div className='text-black'>{toHoursAndMinutesJapanese(tooltipData.bar.data[tooltipData.key])}</div>
        </TooltipInPortal>
      )}
    </div>
  );
}
