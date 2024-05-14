import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import NavLinks, { NavLink } from './ui/navlinks'
import Dropdown from './ui/dropdown'

const Header: React.FC = () => {
  const links: NavLink[] = [
    { text: 'Problem Statement', href: '#problem-statement' },
    { text: 'Solution', href: '#solution' },
    { text: 'Team', href: '#team' },
  ];

  return (
    <nav className='w-screen  bg-black pt-5 h-12 flex items-center justify-between p-3'>
      <Image
        src="/aquatwin-logo.png"
        width={100}
        height={20}
        alt='Logo'
        className='block md:hidden'
      />
      <Image
        src="/aquatwin-logo.png"
        width={200}
        height={200}
        alt='Logo'
        className='hidden md:block'
      />
        <div className='hidden md:block '>
          <NavLinks links={links} />
        </div>
        <div className='hidden md:block'>
        <Button variant="contact" >Contact us</Button>
        </div>
      <div className='block md:hidden '>
        <Dropdown />
      </div>
    </nav>
  )
}

export default Header;
