import { getTodaysStudies } from '@/lib/data';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Notepad from './Notepad';
import TodaysStudiesDate from './TodaysStudiesDate';
import TodaysStudiesItem from './TodaysStudiesItem';
import Window from './Window';

const getData = async () => {
  const data = await getTodaysStudies();
  return data;
};

const TodaysStudies = async () => {
  const studyLogs = await getData();
  const isoDate = new Date().toISOString();
  const today = new Date(isoDate).toLocaleString('en-US');
  const todayJapanese = format(today, 'EE MMM do', { locale: ja });

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
