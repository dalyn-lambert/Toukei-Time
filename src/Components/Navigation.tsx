import NavTile from './NavTile';

export type LinkData = { label: string; route: string };

const links: LinkData[] = [
  { label: 'Home', route: '/home' },
  { label: 'Add Resource', route: '/add-resource' },
  { label: 'Log Studies', route: '/log-studies' },
  { label: 'View Logs', route: '/view-logs' },
  { label: 'View Resources', route: '/view-resources' },
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
