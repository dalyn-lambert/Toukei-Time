import { deleteResource } from '@/lib/actions';
import ButtonGeneral from './ButtonGeneral';

export function DeleteResource({ id }: { id: number }) {
  const deleteResourceWithId = deleteResource.bind(null, id);
  return (
    <form action={deleteResourceWithId}>
      <ButtonGeneral label='Delete Resource' type='Danger' />
    </form>
  );
}
