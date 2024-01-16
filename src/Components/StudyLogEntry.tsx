import { UTCDate } from '@date-fns/utc';
import { StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';
import Window from './Window';

function StudyLogEntry(log: StudyLog) {
  // must convert the date to UTC to avoid date shifting
  // https://github.com/date-fns/utc
  const utcDate = new UTCDate(log.date);
  const date = format(utcDate, 'MM-dd-yyyy');
  return (
    <Link href={`/view-logs/${log.id}`} key={log.id}>
      <Window English={log.category} Japanese={log.category} category={log.category}>
        <div className='flex flex-row justify-between'>
          <span>{log.title}</span>
          <span>{date}</span>
        </div>
      </Window>
    </Link>
  );
}

export default StudyLogEntry;
