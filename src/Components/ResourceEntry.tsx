import { getIconForCategory, getJapaneseNameforCategory, getTotalTimeForResource } from '@/lib/utils';
import { Resource } from '@prisma/client';
import Link from 'next/link';
import Window from './Window';

async function ResourceEntry(resource: Resource) {
  const totalTime = await getTotalTimeForResource(resource.id);
  return (
    <Link href={`/browse/${resource.id}`} key={resource.id}>
      <Window
        English={getJapaneseNameforCategory(resource.category)}
        Japanese={getJapaneseNameforCategory(resource.category)}
        category={resource.category}
      >
        <div className='flex flex-col items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <span>{getIconForCategory(resource.category)}</span>
            <span className='text-md'>{totalTime}</span>
          </div>
          <div className='text-center'>
            <span className='text-lg'>{resource.name}</span>
          </div>
        </div>
      </Window>
    </Link>
  );
}

export default ResourceEntry;
