import { ResourceWithTotalTime } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';
import Link from 'next/link';

function ResourceEntry(resource: ResourceWithTotalTime) {
  return (
    <Link href={`/browse/resource/${resource.id}`} key={resource.id}>
      <div className='grid grid-cols-6 gap-2'>
        <div className='col-start-1 pr-2 shrink-0 g'>{getIconForCategory(resource.category)}</div>
        <div className='col-start-2 col-span-3 truncate text-sm'>{resource.name}</div>
        <div className='col-start-5 col-span-2 text-sm text-center'>{resource.totalTime}</div>
      </div>
    </Link>
  );
}

export default ResourceEntry;
