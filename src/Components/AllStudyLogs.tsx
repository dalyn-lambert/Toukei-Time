import Notepad from '@/Components/Notepad';
import { getAllStudyLogs } from '@/lib/data';

const getData = async () => {
  const data = await getAllStudyLogs();
  return data;
};

const AllStudyLogs = async () => {
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

export default AllStudyLogs;
