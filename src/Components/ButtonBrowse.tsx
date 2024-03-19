type ButtonBrowseProps = { label: string };

function ButtonBrowse({ label }: ButtonBrowseProps) {
  return <button className={'border-2 p-2'}>{label}</button>;
}

export default ButtonBrowse;
