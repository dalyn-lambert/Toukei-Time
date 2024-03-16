import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';

import { getStudiesForDate } from '@/lib/data';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

const getData = async (today: string) => {
  const logs = await getStudiesForDate(today);
  return logs;
};

type GraphDonutTodayProps = { today: string };

const GraphDonutToday = async ({ today }: GraphDonutTodayProps) => {
  const data = await getData(today);
  const stats: StudyStat[] = [
    { category: 'Listening', time: getTimeForCategory('Listening', data) },
    { category: 'Playing', time: getTimeForCategory('Playing', data) },
    { category: 'Watching', time: getTimeForCategory('Watching', data) },
    { category: 'Speaking', time: getTimeForCategory('Speaking', data) },
    { category: 'Reading', time: getTimeForCategory('Reading', data) },
  ];
  return (
    <Window English="Today's Study Time" Japanese='今日の勉強時間'>
      <GraphDonutWithStats stats={stats} />
    </Window>
  );
};

export default GraphDonutToday;
