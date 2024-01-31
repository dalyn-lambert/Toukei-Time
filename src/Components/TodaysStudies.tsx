import { getFormattedToday } from '@/lib/utils';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Notepad from './Notepad';
import TodaysStudiesItem from './TodaysStudiesItem';
import Window from './Window';
import { getStudiesForDate } from '@/lib/data';

const getData = async (today: string) => {
  const data = await getStudiesForDate(today);
  return data;
};

const TodaysStudies = async () => {
  const today = getFormattedToday();
  const todayJapanese = format(today, 'EE MMM do', { locale: ja });
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
