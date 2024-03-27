import { ResourceWithTotalTime } from '@/lib/types';
import { getIconForCategory } from '@/lib/utils';
import Link from 'next/link';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

type ResourceHeaderProps = { resource: ResourceWithTotalTime };

function ResourceHeader({ resource }: ResourceHeaderProps) {
  return (
    <Window English={resource.category} Japanese={resource.category} category={resource.category}>
      <div className='flex flex-col gap-4 items-center'>
        <div className=''>{resource.name}</div>
        <div className='flex flex-row pb-2 items-center'>
          <div className='pr-2 shrink-0'>{getIconForCategory(resource.category)}</div>
          <div className='text-lg text-center'>{resource.totalTime}</div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          {resource.notes && <div className='text-base'>{resource.notes}</div>}
          {resource.link && (
            <a href={resource.link} rel='noopener noreferrer' target='_blank' className='text-base'>
              Visit External Link
            </a>
          )}
        </div>
        <Link href={`/browse/resource/${resource.id}/update`} className='w-full'>
          <ButtonGeneral label='Edit Resource' />
        </Link>
      </div>
    </Window>
  );
}

export default ResourceHeader;
