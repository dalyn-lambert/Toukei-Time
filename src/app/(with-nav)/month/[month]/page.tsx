import GraphDonutMonth from '@/Components/GraphDonutMonth';
import MonthlyStudies from '@/Components/MonthlyStudiesNotepad';
import { getStudiesBetweenDates } from '@/lib/data';
import { StudyStat } from '@/lib/types';
import { getTimeForCategory } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { endOfMonth, format } from 'date-fns';
import { ja } from 'date-fns/locale';

const getData = async (start: string, end: string) => {
  const logs = await getStudiesBetweenDates(start, end);
  const stats: StudyStat[] = [
    { category: 'Listening', value: getTimeForCategory('Listening', logs) },
    { category: 'Playing', value: getTimeForCategory('Playing', logs) },
    { category: 'Watching', value: getTimeForCategory('Watching', logs) },
    { category: 'Speaking', value: getTimeForCategory('Speaking', logs) },
    { category: 'Reading', value: getTimeForCategory('Reading', logs) },
  ];
  return { logs, stats };
};

export default async function ThisMonth({ params }: { params: { month: string } }) {
  const month = params.month;
  const start = `${month}-01`;
  const end = format(endOfMonth(new UTCDate(start)), 'yyyy-MM-dd');
  const year = format(new UTCDate(start), 'yyyy');
  const monthJapanese = format(new UTCDate(start), 'LLLL', { locale: ja });
  const monthEnglish = format(new UTCDate(start), 'LLLL yyyy');
  const data = await getData(start, end);
  return (
    <div className='flex flex-col gap-4'>
      <MonthlyStudies data={data.logs} year={year} monthJapanese={monthJapanese} monthEnglish={monthEnglish} />
      <GraphDonutMonth data={data.stats} year={year} monthJapanese={monthJapanese} monthEnglish={monthEnglish} />
    </div>
  );
}
