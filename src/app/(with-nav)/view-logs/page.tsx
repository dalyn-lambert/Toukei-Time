import StudyLogEntry from '@/Components/StudyLogEntry';
import { getAllStudyLogs } from '@/lib/data';

const getData = async () => {
  const data = await getAllStudyLogs();
  return data;
};

export default async function ViewAllLogsPage() {
  const studyLogs = await getData();

  return (
    <div className='flex flex-col gap-4'>
      {studyLogs.map((log) => (
        <StudyLogEntry key={log.id} {...log} />
      ))}
    </div>
  );
}
