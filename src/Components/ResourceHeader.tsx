import { ResourceWithTotalTime } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';
import Link from 'next/link';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

type ResourceHeaderProps = { resource: ResourceWithTotalTime };

function ResourceHeader({ resource }: ResourceHeaderProps) {
  return (
    <Window English={resource.name} Japanese={resource.name} category={resource.category}>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-evenly'>
          <div className='pr-2 shrink-0'>{getIconForCategory(resource.category)}</div>
          <div className='text-lg'>{resource.name}</div>
          <div className='text-lg text-center'>{resource.totalTime}</div>
        </div>
        <Link href={`/browse/resource/${resource.id}/update`}>
          <ButtonGeneral label='Edit Resource' />
        </Link>
      </div>
    </Window>
  );
}
export default ResourceHeader;
