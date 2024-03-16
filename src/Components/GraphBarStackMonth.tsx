import { getStudiesBetweenDates, getStudyDayForDate } from '@/lib/data';
import { StudyDay } from '@/lib/types';
import { getToday } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { format, subDays } from 'date-fns';
import Window from './Window';

const getData = async (today: string) => {
  const start = subDays(today, 4);
  const startDate = format(new UTCDate(start), 'yyyy-MM-dd');
  const logs = await getStudiesBetweenDates(startDate, today);
  let data: StudyDay[] = [];
  data.push(await getStudyDayForDate(startDate));
  // for (let i = 0; i <= 5; i++) {
  //   if (i === 0) {
  //     data.push(await getStudyDayForDate(startDate));
  //   } else {
  //     const date = format(addDays(startDate, i), 'yyyy-MM-dd');
  //     console.log(date);
  //     data.push(await getStudyDayForDate(date));
  //   }
  // }
  return data;
};

const GraphBarStackMonth = async () => {
  const today = getToday();
  const data = await getData(today);

  return (
    <Window English='This Month Study Time' Japanese='今月の勉強時間'>
      <div className='flex flex-row justify-center border-2 bg-dark-gray bg-opacity-10 border-dark-gray'>
        {/* <GraphBarStack data={data} width={300} height={250} /> */}
        Monthly graph data
      </div>
    </Window>
  );
};

export default GraphBarStackMonth;
