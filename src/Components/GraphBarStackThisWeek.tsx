import { getStudyDayForDate } from '@/lib/data';
import { StudyDay } from '@/lib/types';
import { format } from 'date-fns';
import GraphBarStack from './GraphBarStack';
import Window from './Window';

const getData = async (date: string) => {
  const data: StudyDay = await getStudyDayForDate(date);
  return [data];
};

const GraphBarStackThisWeek = async () => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const data = await getData(today);
  return (
    <Window English="This Week's Study Time" Japanese='今週の勉強時間'>
      <GraphBarStack data={data} width={500} height={250} />
      <div className='h-52'>A stacked bar graph displaying study data for the past seven days</div>
    </Window>
  );
};

export default GraphBarStackThisWeek;
