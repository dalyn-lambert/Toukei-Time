import { getStudyDayForDate } from '@/lib/data';
import { StudyDay } from '@/lib/types';
import { addDays, format, subDays } from 'date-fns';
import GraphBarStack from './GraphBarStack';
import Window from './Window';

const getData = async (today: string) => {
  const start = subDays(today, 3);
  let data: StudyDay[] = [];
  for (let i = 0; i <= 4; i++) {
    const date = format(addDays(start, i), 'yyyy-MM-dd');
    data.push(await getStudyDayForDate(date));
  }
  return data;
};

const GraphBarStackRecent = async () => {
  // get user time zone
  const timeZoneIANA = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // create a new date
  const date = new Date();
  // translate to local date
  const localDate = date.toLocaleString('en-US', { timeZone: timeZoneIANA });
  // format for database call
  const today = format(localDate, 'yyyy-MM-dd');
  const data = await getData(today);

  return (
    <Window English='Recent Study Time' Japanese='最近の勉強時間'>
      <div className='flex flex-row justify-center border-2 bg-dark-gray bg-opacity-10 border-dark-gray'>
        <GraphBarStack data={data} width={300} height={250} />
      </div>
    </Window>
  );
};

export default GraphBarStackRecent;
