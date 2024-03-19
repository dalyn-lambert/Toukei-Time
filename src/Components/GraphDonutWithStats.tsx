import { StudyStat } from '@/lib/types';
import { getIconForCategory, toHoursAndMinutes } from '@/lib/utils';

import DonutChart from './GraphDonut';

const GraphDonutWithStats = ({ stats }: { stats: StudyStat[] }) => {
  const filteredTimes = stats.filter((d) => d.time !== 0);
  const sortedTimes = filteredTimes.sort((a, b) => {
    return b.time - a.time;
  });

  return (
    <div className='flex flex-row gap-4 py-2 items-center justify-around p-4 border-2 bg-dark-gray bg-opacity-10 border-dark-gray'>
      <DonutChart width={165} height={165} data={sortedTimes} donutThickness={30} />
      <div className='flex flex-col'>
        {sortedTimes.map((stat) => (
          <div className='flex flex-row pb-2 items-center' key={stat.category}>
            <span className='pr-2 shrink-0'>{getIconForCategory(stat.category)}</span>
            <span>{toHoursAndMinutes(stat.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphDonutWithStats;
