import { addIcon, browseIcon, logOutIcon, statIcon, todayIcon } from '@/lib/icons';
import LogOut from './LogOut';
import NavTile from './NavTile';

export type LinkData = { label: string; route: string; icon: JSX.Element };

const links: LinkData[] = [
  { label: 'Stats', route: '/stats', icon: statIcon },
  { label: 'Today', route: '/today', icon: todayIcon },
  { label: 'Add', route: '/add', icon: addIcon },
  { label: 'Browse', route: '/browse', icon: browseIcon },
];

const Navigation = async () => {
  return (
    <div className=' bg-gray p-3 drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white '>
      <div className='flex flex-row gap-2 justify-center'>
        <div className='text-black text-base w-32 py-2 flex flex-col justify-end items-center text-center drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white hover:bg-pink'>
          {logOutIcon}
          <LogOut />
        </div>
        {links.map((link) => (
          <NavTile key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
