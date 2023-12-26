import { StudyLog } from '@prisma/client';
import Window from './Window';

function StudyLogEntry(log: StudyLog) {
  return (
    <Window English='Log' Japanese='Log'>
      {log.title}
    </Window>
  );
}

export default StudyLogEntry;
