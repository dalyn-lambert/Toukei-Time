import { getStudiesForDate } from '@/lib/data';
import { getFormattedToday } from '@/lib/utils';
import Notepad from './Notepad';
import TodaysStudiesDate from './TodaysStudiesDate';
import TodaysStudiesItem from './TodaysStudiesItem';
import Window from './Window';

const getData = async (today: string) => {
  const data = await getStudiesForDate(today);
  return data;
};

const TodaysStudies = async () => {
  const today = getFormattedToday();
  const studyLogs = await getData(today);

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
        <TodaysStudiesDate />
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
