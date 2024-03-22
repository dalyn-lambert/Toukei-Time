import { ResourceWithTotalTime } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';
import Link from 'next/link';
import Window from './Window';

type ResourceHeaderProps = { resource: ResourceWithTotalTime };

function ResourceHeader({ resource }: ResourceHeaderProps) {
  return (
    <Window English={resource.name} Japanese={resource.name}>
      <div className='flex flex-col'>
        <div className=' pr-2 shrink-0 g'>{getIconForCategory(resource.category)}</div>
        <div className='  text-sm'>{resource.name}</div>
        <div className=' text-sm text-center'>{resource.totalTime}</div>
      </div>
      <Link href={`/browse/resource/${resource.id}/update`}>Edit</Link>
    </Window>
  );
}
export default ResourceHeader;
