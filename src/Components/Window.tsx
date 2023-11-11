import { WindowProps } from '@/lib/types';
import WindowTitle from './WindowTitle';

function Window(props: WindowProps) {
  return (
    <div className='group bg-gray'>
      <WindowTitle English={props.English} Japanese={props.Japanese} />
      <div className=''>{props.children}</div>
    </div>
  );
}

export default Window;
