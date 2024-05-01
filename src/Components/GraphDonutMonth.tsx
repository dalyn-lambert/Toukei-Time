import { getStudiesBetweenDates } from '@/lib/data';
import { lightbulbIcon } from '@/lib/icons';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { endOfMonth, format } from 'date-fns';
import { ja } from 'date-fns/locale/ja';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

const getData = async (start: string, end: string) => {
  const logs = await getStudiesBetweenDates(start, end);
  const stats: StudyStat[] = [
    { category: 'Listening', value: getTimeForCategory('Listening', logs) },
    { category: 'Playing', value: getTimeForCategory('Playing', logs) },
    { category: 'Watching', value: getTimeForCategory('Watching', logs) },
    { category: 'Speaking', value: getTimeForCategory('Speaking', logs) },
    { category: 'Reading', value: getTimeForCategory('Reading', logs) },
  ];
  return stats;
};

type GraphDonutMonthProps = { month: string };

const GraphDonutMonth = async ({ month }: GraphDonutMonthProps) => {
  const start = `${month}-01`;
  const end = format(endOfMonth(new UTCDate(start)), 'yyyy-MM-dd');
  const year = format(new UTCDate(start), 'yyyy');
  const monthJapanese = format(new UTCDate(start), 'LLLL', { locale: ja });
  const monthEnglish = format(new UTCDate(start), 'LLLL yyyy');
  const data = await getData(start, end);
  return (
    <>
      <Window English={`Study Time for ${monthEnglish}`} Japanese={`${year}年${monthJapanese}の勉強時間`}>
        <GraphDonutWithStats stats={data} />
      </Window>
      <Window English='Notice' Japanese='注目'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex flex-row gap-4 pb-4 items-center'>
            <span className='shrink-0'>{lightbulbIcon}</span>
            <span className='text-center text-lg font-bold'>Did you know?</span>
          </div>
          <span className='text-center'>
            You can see study data for a different day by changing the URL to month/YYYY-MM where YYYY-MM is the year
            and month you want to see.
          </span>
          <span className='text-center'>For example, month/2024-01 would show study data from January 2024.</span>
        </div>
      </Window>
    </>
  );
};

export default GraphDonutMonth;
