import { getStudiesBetweenDates } from '@/lib/data';
import Window from './Window';

const getData = async () => {
  const logs = await getStudiesBetweenDates();
  return logs;
};

const GraphBarStackThisWeek = async () => {
  const data = await getData();

  return <Window English="This Week's Study Time" Japanese='今週の勉強時間'></Window>;
};

export default GraphBarStackThisWeek;
