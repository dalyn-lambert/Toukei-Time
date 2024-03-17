import { getStudiesForDate } from '@/lib/data';
import Notepad from './Notepad';
import TodaysStudiesDate from './TodayStudiesJapaneseDate';
import TodaysStudiesItem from './TodaysStudiesItem';
import Window from './Window';

const getData = async (today: string) => {
  const data = await getStudiesForDate(today);
  return data;
};

type TodayStudiesProps = {
  today: string;
};

const TodaysStudies = async ({ today }: TodayStudiesProps) => {
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
