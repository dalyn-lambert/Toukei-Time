import { WindowProps } from '@/lib/types';
import WindowTitle from './WindowTitle';

function Window(props: WindowProps) {
  return (
    <div className='group bg-gray p-4'>
      <WindowTitle English={props.English} Japanese={props.Japanese} />
      <div className='p-4'>{props.children}</div>
    </div>
  );
}

export default Window;
