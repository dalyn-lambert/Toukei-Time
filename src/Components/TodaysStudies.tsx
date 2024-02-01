import { getStudiesForDate } from '@/lib/data';
import { format } from 'date-fns';
import Notepad from './Notepad';
import TodaysStudiesDate from './TodaysStudiesDate';
import TodaysStudiesItem from './TodaysStudiesItem';
import Window from './Window';

const getData = async (today: string) => {
  console.log(`todays studies is looking for ${today}`);
  const data = await getStudiesForDate(today);
  return data;
};

const TodaysStudies = async () => {
  const today = new Date().toLocaleDateString();
  const formattedToday = format(today, 'yyyy-MM-dd');
  console.log(formattedToday);
  const studyLogs = await getData(formattedToday);

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
        <TodaysStudiesDate />
        <span>{today}</span>
        <div className='pt-2'>
          {studyLogs.map((log) => (
            <TodaysStudiesItem key={log.id} log={log} />
          ))}
          <span>• | </span>
        </div>
      </Notepad>
    </Window>
  );
};

export default TodaysStudies;
