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
        'text-black text-sm tracking-widest text-center hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-gradient-1',
        isActive && 'underline underline-offset-2 decoration-2 decoration-gradient-1 font-bold'
      )}
    >
      {link.label}
    </Link>
  );
};

export default NavTile;
