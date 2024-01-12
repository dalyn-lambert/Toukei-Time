import { deleteResource } from '@/lib/actions';
import StyledButton from './StyledButton';

export function DeleteResource({ id }: { id: number }) {
  const deleteResourceWithId = deleteResource.bind(null, id);
  return (
    <form action={deleteResourceWithId}>
      <StyledButton label='Delete Resource' type='Danger' />
    </form>
  );
}
