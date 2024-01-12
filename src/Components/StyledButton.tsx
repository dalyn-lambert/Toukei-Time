import { StyledButtonProps } from '@/lib/types';

function StyledButton(props: StyledButtonProps) {
  return (
    <button className='bg-green hover:bg-dark-green w-full p-2 text-lg rounded-md text-center border-2 border-dark-gray'>
      {props.label}
    </button>
  );
}

export default StyledButton;
