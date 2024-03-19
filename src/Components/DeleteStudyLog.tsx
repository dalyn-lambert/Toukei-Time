import { deleteStudyLog } from '@/lib/actions';
import ButtonGeneral from './ButtonGeneral';

export function DeleteStudyLog({ id }: { id: number }) {
  const deleteStudyLogWithId = deleteStudyLog.bind(null, id);
  return (
    <form action={deleteStudyLogWithId}>
      <ButtonGeneral label='Delete Study Log' type='Danger' />
    </form>
  );
}
