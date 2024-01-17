import { StyledButtonProps } from '@/lib/types';

function StyledButton({ label, type }: StyledButtonProps) {
  const dangerStyles = 'bg-rose-700 hover:bg-rose-900';
  const standardStyles = 'bg-green hover:bg-dark-green';
  const styles = type === 'Danger' ? dangerStyles : standardStyles;
  return (
    <button className={`${styles} w-full p-2 text-lg rounded-md text-center border-2 border-dark-gray`}>{label}</button>
  );
}

export default StyledButton;
