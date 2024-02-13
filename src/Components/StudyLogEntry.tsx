import { formatJapaneseDate, toHoursAndMinutes } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';
import Window from './Window';

function StudyLogEntry(log: StudyLog) {
  const date = format(new UTCDate(log.date), 'yyyy-MM-dd');
  const JapaneseDate = formatJapaneseDate(date);

  return (
    <Link href={`/${log.id}`} key={log.id}>
      <Window English={log.category} Japanese={log.category} category={log.category}>
        <div className='flex flex-row justify-between'>
          <span>{log.title}</span>
          <span>{toHoursAndMinutes(log.time)}</span>
          <span>{JapaneseDate}</span>
        </div>
      </Window>
    </Link>
  );
}

export default StudyLogEntry;
