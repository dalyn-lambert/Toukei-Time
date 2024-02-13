import { getResourceFromId } from '@/lib/data';
import { getIconForCategory } from '@/lib/utils';
import { StudyLog } from '@prisma/client';
import Link from 'next/link';

const getData = async (resourceId: number) => {
  const data = await getResourceFromId(resourceId);
  return data;
};

const TodaysStudiesItem = async ({ log }: { log: StudyLog }) => {
  const resource = await getData(log.resourceId);

  return (
    <Link href={`${log.id}`}>
      <div className='flex flex-row pb-2 items-center'>
        <span className='pr-2 shrink-0'>{getIconForCategory(log.category)}</span>
        <span className='truncate'>
          {log.title} ～ {resource?.name}
        </span>
      </div>
    </Link>
  );
};

export default TodaysStudiesItem;
