import { homeIcon } from '@/lib/icons';
import NavTile from './NavTile';

export type LinkData = { label: string; route: string; icon: JSX.Element };

const links: LinkData[] = [
  { label: 'Home', route: '/home', icon: homeIcon },
  { label: 'Add Resource', route: '/add-resource', icon: homeIcon },
  { label: 'Log Studies', route: '/log-studies', icon: homeIcon },
  { label: 'View Logs', route: '/view-logs', icon: homeIcon },
  { label: 'View Resources', route: '/view-resources', icon: homeIcon },
];

const Navigation = async () => {
  return (
    <div className=' bg-gray p-3 drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white '>
      <div className='flex flex-row text-xs gap-4'>
        {links.map((link) => (
          <NavTile key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
