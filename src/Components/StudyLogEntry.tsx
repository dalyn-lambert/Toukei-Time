import { StudyLog } from '@prisma/client';
import Link from 'next/link';
import Window from './Window';

function StudyLogEntry(log: StudyLog) {
  return (
    <Link href={`/view-logs/${log.id}`} key={log.id}>
      <Window English={log.category} Japanese={log.category} category={log.category}>
        {log.title}
      </Window>
    </Link>
  );
}

export default StudyLogEntry;
