import { getAllStudyLogs } from '@/lib/data';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Notepad from './Notepad';
import Window from './Window';

const getData = async () => {
  const data = await getAllStudyLogs();
  return data;
};

const TodaysStudies = async () => {
  const studyLogs = await getData();
  const today = new Date();
  const todayJapanese = format(today, 'EE MMM do', { locale: ja });

  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
        <span>{todayJapanese}</span>
        <>
          {studyLogs.map((log) => (
            <span key={log.id}>• {log.title}</span>
          ))}
          <span>• | </span>
        </>
      </Notepad>
    </Window>
  );
};

export default TodaysStudies;
