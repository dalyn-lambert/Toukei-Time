import { WindowProps } from '@/lib/types';
import WindowTitle from './WindowTitle';

function Window(props: WindowProps) {
  return (
    <div className='group bg-gray flex flex-col rounded-sm  drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white p-2'>
      <WindowTitle English={props.English} Japanese={props.Japanese} />
      <div className='py-4'>{props.children}</div>
    </div>
  );
}

export default Window;
