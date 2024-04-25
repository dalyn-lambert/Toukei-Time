import { getStudiesBetweenDates } from '@/lib/data';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { endOfMonth, format } from 'date-fns';
import GraphDonutWithStats from './GraphDonutWithStats';
import Window from './Window';

const getData = async (start: string, end: string) => {
  const logs = await getStudiesBetweenDates(start, end);
  const stats: StudyStat[] = [
    { category: 'Listening', value: getTimeForCategory('Listening', logs) },
    { category: 'Playing', value: getTimeForCategory('Playing', logs) },
    { category: 'Watching', value: getTimeForCategory('Watching', logs) },
    { category: 'Speaking', value: getTimeForCategory('Speaking', logs) },
    { category: 'Reading', value: getTimeForCategory('Reading', logs) },
  ];
  return stats;
};

type GraphDonutMonthProps = { month: string };

const GraphDonutMonth = async ({ month }: GraphDonutMonthProps) => {
  const start = `${month}-01`;
  const end = format(endOfMonth(new UTCDate(start)), 'yyyy-MM-dd');
  const formattedMonth = format(new UTCDate(start), 'LLLL yyyy');
  const data = await getData(start, end);
  return (
    <>
      <Window English='' Japanese=''>
        <div className='text-center'>Study time for {formattedMonth}</div>
      </Window>
      <Window English='Monthly Study Time' Japanese='今月の勉強時間'>
        <GraphDonutWithStats stats={data} />
      </Window>
    </>
  );
};

export default GraphDonutMonth;
