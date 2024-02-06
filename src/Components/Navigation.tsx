import { logStudiesIcon, todayIcon, viewStudiesIcon } from '@/lib/icons';
import NavTile from './NavTile';

export type LinkData = { label: string; route: string; icon: JSX.Element };

const links: LinkData[] = [
  { label: 'Month', route: '/this-month', icon: todayIcon },
  { label: 'Week', route: '/this-week', icon: todayIcon },
  { label: 'Today', route: '/today', icon: todayIcon },
  { label: 'Add', route: '/add', icon: logStudiesIcon },
  { label: 'Browse', route: '/browse', icon: viewStudiesIcon },
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
