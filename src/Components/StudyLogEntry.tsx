import { formatJapaneseDate, getIconForCategory, toHoursAndMinutes } from '@/lib/utils';
import { UTCDate } from '@date-fns/utc';
import { StudyLog } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';

function StudyLogEntry(log: StudyLog) {
  const date = format(new UTCDate(log.date), 'yyyy-MM-dd');
  const JapaneseDate = formatJapaneseDate(date);

  return (
    <Link href={`/browse/studylog/${log.id}`} key={log.id}>
      <div className='grid grid-cols-7 gap-2'>
        <div className='col-start-1 pr-2 shrink-0 g'>{getIconForCategory(log.category)}</div>
        <div className='col-start-2 col-span-2 text-sm'>{JapaneseDate}</div>
        <div className='col-start-4 col-span-3 truncate text-sm'>{log.title}</div>
        <div className='col-start-7 col-span-2 text-sm text-center'>{toHoursAndMinutes(log.time)}</div>
      </div>
    </Link>
  );
}
export default StudyLogEntry;
