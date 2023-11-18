import { NotepadProps } from '@/lib/types';
import Window from './Window';

function Notepad(props: NotepadProps) {
  return (
    <Window English='Recently Studied' Japanese='最近の勉強'>
      <div className='flex flex-col bg-slate-200 p-4 border-2 border-dark-gray'>{props.children}</div>
    </Window>
  );
}

export default Notepad;