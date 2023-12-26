import { getAllStudyLogs } from '@/lib/data';
import Notepad from './Notepad';
import Window from './Window';

const getData = async () => {
  const data = await getAllStudyLogs();
  return data;
};

const TodaysStudies = async () => {
  const studyLogs = await getData();
  return (
    <Window English="Today's Studies" Japanese='今日の勉強'>
      <Notepad>
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
