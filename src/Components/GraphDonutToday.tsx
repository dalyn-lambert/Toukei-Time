import { StudyStat } from '@/lib/types';
import { getIconForCategory, getTimeForCategory, toHoursAndMinutes } from '@/lib/utils';

import { getStudiesForDate } from '@/lib/data';
import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import DonutChart from './GraphDonut';
import Window from './Window';

const getData = async (today: string) => {
  const logs = await getStudiesForDate(today);
  return logs;
};

const GraphDonutToday = async () => {
  const today = format(new UTCDate(), 'yyyy-MM-dd');
  const data = await getData(today);
  const dailyStats: StudyStat[] = [
    { category: 'Listening', time: getTimeForCategory('Listening', data) },
    { category: 'Playing', time: getTimeForCategory('Playing', data) },
    { category: 'Watching', time: getTimeForCategory('Watching', data) },
    { category: 'Speaking', time: getTimeForCategory('Speaking', data) },
    { category: 'Reading', time: getTimeForCategory('Reading', data) },
  ];
  const filteredDailyStats: StudyStat[] = dailyStats.filter((stat) => stat.time !== 0);
  return (
    <Window English="Today's Study Time" Japanese='今日の勉強時間'>
      <div className='flex flex-row gap-4 py-2 justify-around'>
        <DonutChart width={175} height={175} data={filteredDailyStats} donutThickness={30} />
        <div className='flex flex-col'>
          {filteredDailyStats.map((stat) => (
            <div className='flex flex-row pb-2 items-center' key={stat.category}>
              <span className='pr-2 shrink-0'>{getIconForCategory(stat.category)}</span>
              <span>{toHoursAndMinutes(stat.time)}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default GraphDonutToday;
