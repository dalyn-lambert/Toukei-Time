import { deleteStudyLog } from '@/lib/actions';
import StyledButton from './StyledButton';

export function DeleteStudyLog({ id }: { id: number }) {
  const deleteStudyLogWithId = deleteStudyLog.bind(null, id);
  return (
    <form action={deleteStudyLogWithId}>
      <StyledButton label='Delete Study Log' type='Danger' />
    </form>
  );
}
