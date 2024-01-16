import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';

import { getTodaysStudies } from '@/lib/data';
import DonutChart from './GraphDonut';
import Window from './Window';

const getData = async () => {
  const logs = await getTodaysStudies();
  return logs;
};

const GraphDonutToday = async () => {
  const data = await getData();
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
