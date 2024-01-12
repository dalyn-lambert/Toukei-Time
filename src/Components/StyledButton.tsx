import { StyledButtonProps } from '@/lib/types';

function StyledButton(props: StyledButtonProps) {
  const dangerStyles = 'bg-rose-700 hover:bg-rose-900';
  const standardStyles = 'bg-green hover:bg-dark-green';
  const color = props.type === 'Danger' ? dangerStyles : standardStyles;
  return (
    <button className={`${color} w-full p-2 text-lg rounded-md text-center border-2 border-dark-gray`}>
      {props.label}
    </button>
  );
}

export default StyledButton;
