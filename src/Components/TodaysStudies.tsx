import { getAllStudyLogs } from '@/lib/data';
import Notepad from './Notepad';

const getData = async () => {
  const data = await getAllStudyLogs();
  return data;
};

const TodaysStudies = async () => {
  const studyLogs = await getData();
  return (
    <Notepad>
      <>
        {studyLogs.map((log) => (
          <span key={log.id}>• {log.title}</span>
        ))}
        <span>• | </span>
      </>
    </Notepad>
  );
};

export default TodaysStudies;
