import React from 'react';
import Link from 'next/link';

export interface NavLink {
  text: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <ul className='flex lg:w-96 gap-4 lg:gap-0 justify-between'>
      {links.map((link, index) => (
        <li key={index} className='hover:text-btn'>
          <Link href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
