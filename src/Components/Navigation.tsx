'use client';

import { addIcon, browseIcon, monthIcon, profileIcon, todayIcon } from '@/lib/icons';
import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import NavTile from './NavTile';

export type LinkData = { label: string; route: string; icon: JSX.Element };

const today = format(new UTCDate().toISOString(), 'yyyy-MM-dd');
const month = format(new UTCDate().toISOString(), 'yyyy-MM');

const links: LinkData[] = [
  { label: 'Profile', route: '/profile', icon: profileIcon },
  { label: 'Month', route: `/month/${month}`, icon: monthIcon },
  { label: 'Log', route: '/log', icon: addIcon },
  { label: 'Today', route: `/${today}`, icon: todayIcon },
  { label: 'Browse', route: '/browse', icon: browseIcon },
];

const Navigation = () => {
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
