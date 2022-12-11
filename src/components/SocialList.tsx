import React from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import SocialInfo from './SocialInfo';

const socialInfo = [
  {
    id: 1,
    link: 'https://www.facebook.com/AT.aarontu/',
    icon: <IoLogoFacebook />,
  },
  {
    id: 2,
    link: 'https://www.instagram.com/aarontu.8293/',
    icon: <IoLogoInstagram />,
  },
];

function SocialList() {
  const renderList = socialInfo.map((x) => {
    return <SocialInfo key={x.id} link={x.link} icon={x.icon} />;
  });

  return <ul className='flex items-center justify-start gap-4 pb-1 pl-2'>{renderList}</ul>;
}

export default SocialList;
