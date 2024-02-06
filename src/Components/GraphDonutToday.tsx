import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';

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
  return (
    <Window English="Today's Study Time" Japanese='今日の勉強時間'>
      <DonutChart width={175} height={175} data={dailyStats} donutThickness={30} />
    </Window>
  );
};

export default GraphDonutToday;
