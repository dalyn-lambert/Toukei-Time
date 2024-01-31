import { getStudiesBetweenDates } from '@/lib/data';
import { getFormattedToday } from '@/lib/utils';
import { format, subDays } from 'date-fns';
import Window from './Window';

const getData = async (start: string, end: string) => {
  const data = await getStudiesBetweenDates(start, end);
  return data;
};

const GraphBarStackThisWeek = async () => {
  const end = getFormattedToday();
  const start = subDays(end, 7);
  const formattedStart = format(start, 'yyyy-MM-dd');
  const data = await getData(formattedStart, end);
  return <Window English="This Week's Study Time" Japanese='今週の勉強時間'></Window>;
};

export default GraphBarStackThisWeek;
