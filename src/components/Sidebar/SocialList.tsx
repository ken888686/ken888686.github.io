import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import SocialInfo from '../SocialInfo';

const socialInfo = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/yungchuntu/',
    icon: <IoLogoLinkedin />,
  },
  {
    id: 2,
    link: 'https://github.com/ken888686/',
    icon: <IoLogoGithub />,
  },
  {
    id: 3,
    link: 'https://www.instagram.com/aarontu.8293/',
    icon: <IoLogoInstagram />,
  },
  {
    id: 4,
    link: 'https://www.facebook.com/AT.aarontu/',
    icon: <IoLogoFacebook />,
  },
];

function SocialList() {
  const renderList = socialInfo.map((x) => {
    return <SocialInfo key={x.id} link={x.link} icon={x.icon} />;
  });

  return <ul className='flex items-center justify-start gap-4 pb-1 pl-2'>{renderList}</ul>;
}

export default SocialList;
