import { WindowTitleProps } from '@/lib/types';

function WindowTitle(props: WindowTitleProps) {
  return (
    <div className=' bg-yellow'>
      <div>
        <span className='group-hover:opacity-0 absolute'>{props.Japanese}</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{props.English}</span>
      </div>
      <div className='flex flex-row gap-1 pt-[6px]'>
        <div className='w-3.5 h-3.5 bg-base-gray rounded-sm border-2 border-slate-800 shadow-inner shadow-white'></div>
        <div className='w-3.5 h-3.5 bg-base-gray rounded-sm border-2 border-slate-800 shadow-inner shadow-white'></div>
        <div className='w-3.5 h-3.5 bg-base-gray rounded-sm border-2 border-slate-800 shadow-inner shadow-white'></div>
      </div>
    </div>
  );
}

export default WindowTitle;
