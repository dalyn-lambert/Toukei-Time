import Link from 'next/link';
import LogOut from './LogOut';
import Window from './Window';

function Navigation() {
  return (
    <Window English='Navigation' Japanese='ログアウト'>
      <div className='grid grid-rows-2 grid-cols-3 gap-2'>
        <Link href={'/'}>Home</Link>
        <Link href={'/view-logs'}>View Logs</Link>
        <Link href={'/log-studies'}>Log Studies</Link>
        <LogOut />
        <Link href={'/view-resources'}>View Resources</Link>
        <Link href={'/add-resource'}>Add Resource</Link>
      </div>
    </Window>
  );
}

export default Navigation;
