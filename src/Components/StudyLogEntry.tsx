import { StudyLog } from '@prisma/client';
import Window from './Window';

function StudyLogEntry(log: StudyLog) {
  return (
    <Window English={log.category} Japanese={log.category}>
      <div className='flec flex-col gap-2'>
        {log.title}
        <div className='flex flex-row justify-between'>
          <span>Delete</span> <span>Edit</span>
        </div>
      </div>
    </Window>
  );
}

export default StudyLogEntry;
