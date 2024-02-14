import { StudyStat } from '@/lib/types';
import { getIconForCategory, toHoursAndMinutes } from '@/lib/utils';

import DonutChart from './GraphDonut';

const GraphDonutWithStats = ({ stats }: { stats: StudyStat[] }) => {
  return (
    <div className='flex flex-row gap-4 py-2 justify-around  p-4 border-2 bg-dark-gray bg-opacity-10 border-dark-gray'>
      <DonutChart width={150} height={150} data={stats} donutThickness={30} />
      <div className='flex flex-col'>
        {stats.map((stat) => (
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
