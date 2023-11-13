import { StyledButtonProps } from '@/lib/types';

function StyledButton(props: StyledButtonProps) {
  return (
    <button className='bg-green hover:bg-dark-green p-2 rounded-md text-center border-2 border-dark-gray'>
      {props.label}
    </button>
  );
}

export default StyledButton;
