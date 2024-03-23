type ButtonGeneralProps = { label: string; type?: 'Standard' | 'Danger' };

function ButtonGeneral({ label, type }: ButtonGeneralProps) {
  const dangerStyles = 'bg-rose-950 text-white hover:bg-rose-900';
  const standardStyles = 'bg-green hover:bg-dark-green';
  const styles = type === 'Danger' ? dangerStyles : standardStyles;
  return (
    <button className={`${styles} w-full p-2 text-lg rounded-md text-center border-2 border-dark-gray`}>{label}</button>
  );
}

export default ButtonGeneral;
