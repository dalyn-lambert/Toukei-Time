import { deleteStudyLog } from '@/lib/actions';
import { warningIcon } from '@/lib/icons';
import ButtonGeneral from './ButtonGeneral';
import Window from './Window';

export function DeleteStudyLog({ id }: { id: number }) {
  const deleteStudyLogWithId = deleteStudyLog.bind(null, id);
  return (
    <Window English='Delete study log' Japanese='ログを消す' category='Danger'>
      <div className='flex flex-row gap-4 px-8 pb-4 items-center'>
        <span className='shrink-0'>{warningIcon}</span>
        <span className='text-center text-sm'>
          Clicking the button below will permanently delete this study log. This action can not be undone.
        </span>
      </div>
      <form action={deleteStudyLogWithId}>
        <ButtonGeneral label='Delete Study Log' type='Danger' />
      </form>
    </Window>
  );
}
