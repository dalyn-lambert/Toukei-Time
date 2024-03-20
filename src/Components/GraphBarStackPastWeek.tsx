import { getStudyDayForDate } from '@/lib/data';
import { StudyDay } from '@/lib/types';
import { UTCDate } from '@date-fns/utc';
import { addDays, format, subDays } from 'date-fns';
import GraphBarStack from './GraphBarStack';
import Window from './Window';

const getData = async (today: string) => {
  const start = subDays(today, 5);
  const startDate = format(new UTCDate(start), 'yyyy-MM-dd');
  let data: StudyDay[] = [];
  for (let i = 0; i <= 6; i++) {
    const date = format(addDays(startDate, i), 'yyyy-MM-dd');
    data.push(await getStudyDayForDate(date));
  }
  return data;
};

type GraphBarStackPastWeekProps = {
  today: string;
};

const GraphBarStackPastWeek = async ({ today }: GraphBarStackPastWeekProps) => {
  const data = await getData(today);

  return (
    <Window English='Recent Study Time' Japanese='最近の勉強時間'>
      <div className='flex flex-row justify-center border-2 bg-dark-gray bg-opacity-10 border-dark-gray'>
        <GraphBarStack data={data} width={325} height={225} />
      </div>
    </Window>
  );
};

export default GraphBarStackPastWeek;
