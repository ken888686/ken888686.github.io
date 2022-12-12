import React from 'react';
import NavbarLink from './NavbarLink';
import NavbarList from './NavbarList';

function Navbar() {
  return (
    <nav className='fixed bottom-0 left-0 z-20 w-full border -border--jet -bg--navbar shadow-2 backdrop-blur'>
      <NavbarList />
    </nav>
  );
}

export default Navbar;
