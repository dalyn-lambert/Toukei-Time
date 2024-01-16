import { getTodaysStudies } from '@/lib/data';
import { getIconForCategory } from '@/lib/utils';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Notepad from './Notepad';
import Window from './Window';

const getData = async () => {
  const data = await getTodaysStudies();
  return data;
};

const TodaysStudies = async () => {
  const studyLogs = await getData();
  const today = new Date();
  const todayJapanese = format(today, 'EE MMM do', { locale: ja });

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
        <span className='border-b-2 border-black'>{todayJapanese}</span>
        <div className='pt-2'>
          {studyLogs.map((log) => (
            <div key={log.id} className='flex flex-row pb-2 items-center'>
              <span className='pr-2 shrink-0'>{getIconForCategory(log.category)}</span>
              <span>{log.title}</span>
            </div>
          ))}
          <span>• | </span>
        </div>
      </Notepad>
    </Window>
  );
};

export default TodaysStudies;
