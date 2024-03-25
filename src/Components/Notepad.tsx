import { NotepadProps } from '@/lib/types';

function Notepad(props: NotepadProps) {
  return (
    <div className='flex flex-col bg-slate-200 p-4 border-2 border-dark-gray h-[200px] overflow-y-scroll'>
      {props.children}
    </div>
  );
}

export default Notepad;
