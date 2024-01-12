import { WindowTitleProps } from '@/lib/types';

function WindowTitle(props: WindowTitleProps) {
  let bgColor = 'bg-yellow';
  if (props.category) {
    bgColor = `bg-${props.category.toLocaleLowerCase()}`;
  }

  return (
    <div
      className={`${bgColor} text-white flex flex-row justify-between shrink-0 rounded-sm p-2 border-2 border-dark-gray shadow-inner shadow-white`}
    >
      <div className='flex items-center'>
        <span className='group-hover:opacity-0 absolute'>{props.Japanese}</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{props.English}</span>
      </div>
      <div className='flex flex-row gap-1'>
        <div className='w-3.5 h-3.5 bg-gray rounded-sm border-2 border-dark-gray shadow-inner shadow-white'></div>
        <div className='w-3.5 h-3.5 bg-gray rounded-sm border-2 border-dark-gray shadow-inner shadow-white'></div>
        <div className='w-3.5 h-3.5 bg-gray rounded-sm border-2 border-dark-gray shadow-inner shadow-white'></div>
      </div>
    </div>
  );
}

export default WindowTitle;
