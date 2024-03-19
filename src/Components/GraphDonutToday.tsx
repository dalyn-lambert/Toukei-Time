import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';

import { getStudiesForDate } from '@/lib/data';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

const getData = async (today: string) => {
  const logs = await getStudiesForDate(today);
  const stats: StudyStat[] = [
    { category: 'Listening', time: getTimeForCategory('Listening', logs) },
    { category: 'Playing', time: getTimeForCategory('Playing', logs) },
    { category: 'Watching', time: getTimeForCategory('Watching', logs) },
    { category: 'Speaking', time: getTimeForCategory('Speaking', logs) },
    { category: 'Reading', time: getTimeForCategory('Reading', logs) },
  ];
  return stats;
};

type GraphDonutTodayProps = { today: string };

const GraphDonutToday = async ({ today }: GraphDonutTodayProps) => {
  const data = await getData(today);

  return (
    <Window English="Today's Study Time" Japanese='今日の勉強時間'>
      <GraphDonutWithStats stats={data} />
    </Window>
  );
};

export default GraphDonutToday;
