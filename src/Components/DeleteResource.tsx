import { deleteResource } from '@/lib/actions';
import { warningIcon } from '@/lib/icons';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

export function DeleteResource({ id }: { id: number }) {
  const deleteResourceWithId = deleteResource.bind(null, id);
  return (
    <Window English='Delete resource' Japanese='???を消す'>
      <div className='flex flex-row gap-4 px-8 pb-4 items-center'>
        <span className='shrink-0'>{warningIcon}</span>
        <span className='text-center text-sm'>
          Clicking the button below will permanently delete this resource. Study logs associated with this resource will
          also be delete. This action can not be undone.
        </span>
      </div>
      <form action={deleteResourceWithId}>
        <ButtonGeneral label='Delete Resource' type='Danger' />
      </form>
    </Window>
  );
}
