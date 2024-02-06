import { addIcon, browseIcon, monthIcon, todayIcon, weekIcon } from '@/lib/icons';
import NavTile from './NavTile';

export type LinkData = { label: string; route: string; icon: JSX.Element };

const links: LinkData[] = [
  { label: 'Month', route: '/this-month', icon: monthIcon },
  { label: 'Week', route: '/this-week', icon: weekIcon },
  { label: 'Today', route: '/today', icon: todayIcon },
  { label: 'Add', route: '/add', icon: addIcon },
  { label: 'Browse', route: '/browse', icon: browseIcon },
];

const Navigation = async () => {
  return (
    <div className=' bg-gray p-3 drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white '>
      <div className='flex flex-row gap-2 justify-center'>
        {links.map((link) => (
          <NavTile key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
