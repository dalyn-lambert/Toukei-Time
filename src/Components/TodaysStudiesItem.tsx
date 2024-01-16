import { getResourceFromId } from '@/lib/data';
import { getIconForCategory } from '@/lib/utils';
import { StudyLog } from '@prisma/client';

const getData = async (resourceId: number) => {
  const data = await getResourceFromId(resourceId);
  return data;
};

const TodaysStudiesItem = async ({ log }: { log: StudyLog }) => {
  const resource = await getData(log.resourceId);

  return (
    <div className='flex flex-row pb-2 items-center'>
      <span className='pr-2 shrink-0'>{getIconForCategory(log.category)}</span>
      <span>
        {log.title} ～ {resource?.name}
      </span>
    </div>
  );
};

export default TodaysStudiesItem;
