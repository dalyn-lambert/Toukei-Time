'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkData } from './Navigation';

type NavTileProps = { link: LinkData };

const NavTile = ({ link }: NavTileProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname == link.route) {
    isActive = true;
  }

  return (
    <Link
      href={link.route}
      className={clsx(
        'text-black text-xs p-1 content-center drop-shadow-lg border-2 border-dark-gray shadow-inner shadow-white hover:bg-pink',
        isActive && 'bg-pink font-bold'
      )}
    >
      {link.icon}
      {link.label}
    </Link>
  );
};

export default NavTile;
