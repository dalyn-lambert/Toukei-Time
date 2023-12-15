import Link from 'next/link';

function Navigation() {
  return (
    <div className=' bg-gray p-3 drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white '>
      <div className='flex flex-row text-xs gap-4'>
        <Link href={'/'}>Home</Link>
        <Link href={'/view-logs'}>View Logs</Link>
        <Link href={'/log-studies'}>Log Studies</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/view-resources'}>View Resources</Link>
        <Link href={'/add-resource'}>Add Resource</Link>
      </div>
    </div>
  );
}

export default Navigation;
