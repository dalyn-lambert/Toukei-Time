import { getJapaneseNameforCategory, getTotalTimeForResource } from '@/lib/utils';
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
        <div className='flex flex-col text-center'>
          <span className='text-lg'>{resource.name}</span>
          <span className='text-md'>{totalTime}</span>
        </div>
      </Window>
    </Link>
  );
}

export default ResourceEntry;
