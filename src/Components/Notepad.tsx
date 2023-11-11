import { getAllStudyLogs } from '@/lib/data';
import Window from './Window';

const getData = async () => {
  const data = await getAllStudyLogs();
  return data;
};

const Notepad = async () => {
  const studyLogs = await getData();
  return (
    <Window English='Recently Studied' Japanese='最近の勉強'>
      <div className='flex flex-col bg-slate-200 p-4 border-2 border-dark-gray'>
        {studyLogs.map((log) => (
          <span key={log.id}>- {log.title}</span>
        ))}
        <span>| </span>
      </div>
    </Window>
  );
};

export default Notepad;
