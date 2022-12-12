import React from 'react';
import NavbarLink from './NavbarLink';

const navList = [
  { id: 0, title: 'About', link: '' },
  { id: 1, title: 'Resume', link: '' },
  { id: 2, title: 'Portfolio', link: '' },
  { id: 3, title: 'Blog', link: '' },
  { id: 4, title: 'Contact', link: '' },
];

function NavbarList() {
  const renderList = navList.map((x) => {
    return <NavbarLink key={x.id} title={x.title} link={x.link} />;
  });
  return <ul className='flex flex-wrap items-center justify-center py-2'>{renderList}</ul>;
}

export default NavbarList;
