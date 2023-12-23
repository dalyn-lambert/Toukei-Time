import { addResourceIcon, homeIcon, logStudiesIcon, viewResourcesIcon, viewStudiesIcon } from '@/lib/icons';
import NavTile from './NavTile';

export type LinkData = { label: string; route: string; icon: JSX.Element };

const links: LinkData[] = [
  { label: 'Home', route: '/', icon: homeIcon },
  { label: 'Add Media', route: '/add-resource', icon: addResourceIcon },
  { label: 'Log Studies', route: '/log-studies', icon: logStudiesIcon },
  { label: 'View Logs', route: '/view-logs', icon: viewStudiesIcon },
  { label: 'View Media', route: '/view-resources', icon: viewResourcesIcon },
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
