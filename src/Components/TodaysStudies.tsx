import { getStudiesForDate } from '@/lib/data';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Notepad from './Notepad';
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
  const todayJapanese = format(new Date(), 'EE MMM do', { locale: ja });
  const studyLogs = await getData(today);

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
        <span className='border-b-2 border-black'>{todayJapanese}</span>
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
