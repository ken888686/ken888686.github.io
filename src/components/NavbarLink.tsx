import React from 'react';

function NavbarLink({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <a
        href={link}
        className={`cursor-pointer px-5 py-2 text-8 -text--light-gray transition-colors hover:-text--light-gray-70
        ${link === title.toLowerCase() ? '-text--orange-yellow-crayola' : ''}`}
      >
        {title}
      </a>
    </li>
  );
}

export default NavbarLink;
