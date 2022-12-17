import React from 'react';

function SocialInfo({ link, icon }: { link: string; icon: JSX.Element }) {
  return (
    <li>
      <a
        href={link}
        className='text-lg -text--light-gray-70 hover:-text--light-gray'
        target='_blank'
        rel='noreferrer'
      >
        {icon}
      </a>
    </li>
  );
}

export default SocialInfo;
