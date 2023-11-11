import { StyledButtonProps } from '@/lib/types';

function StyledButton(props: StyledButtonProps) {
  return <button className='bg-green p-2 rounded-md text-center'>{props.label}</button>;
}

export default StyledButton;
