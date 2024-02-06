import { getStudiesForDate } from '@/lib/data';
import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import Notepad from './Notepad';
import TodaysStudiesDate from './TodaysStudiesDate';
import TodaysStudiesItem from './TodaysStudiesItem';
import Window from './Window';

const getData = async (today: string) => {
  const data = await getStudiesForDate(today);
  return data;
};

const TodaysStudies = async () => {
  const today = format(new UTCDate(), 'yyyy-MM-dd');
  const studyLogs = await getData(today);

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
