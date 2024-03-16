import { formatJapaneseDate, toHoursAndMinutes } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';

function StudyLogEntry(log: StudyLog) {
  const date = format(new UTCDate(log.date), 'yyyy-MM-dd');
  const JapaneseDate = formatJapaneseDate(date);

  return (
    <Link href={`/browse/studylog/${log.id}`} key={log.id}>
      <div className='flex flex-row justify-between'>
        <span>{log.title}</span>
        <span>{toHoursAndMinutes(log.time)}</span>
        <span>{JapaneseDate}</span>
      </div>
    </Link>
  );
}
export default StudyLogEntry;
