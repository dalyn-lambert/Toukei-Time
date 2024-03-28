import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';

import { getStudiesForDate } from '@/lib/data';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

const getData = async (today: string) => {
  const logs = await getStudiesForDate(today);
  const stats: StudyStat[] = [
    { category: 'Listening', value: getTimeForCategory('Listening', logs) },
    { category: 'Playing', value: getTimeForCategory('Playing', logs) },
    { category: 'Watching', value: getTimeForCategory('Watching', logs) },
    { category: 'Speaking', value: getTimeForCategory('Speaking', logs) },
    { category: 'Reading', value: getTimeForCategory('Reading', logs) },
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
