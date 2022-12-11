import React, { useState, useTransition } from 'react';
import {
  IoChevronDown,
  IoChevronDownCircle,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from 'react-icons/io5';

const Sidebar = () => {
  const [isPending, startTransition] = useTransition();
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    startTransition(() => {
      setShowMore(!showMore);
    });
  };

  return (
    <aside
      className={`z-10 mb-4
      ${showMore ? 'max-h-fit' : 'max-h-28'}
       overflow-hidden rounded-2xl border -border--jet -bg--eerie-black-2 p-4 -text--white-2 -shadow--shadow-1`}
    >
      <div className='relative flex items-center justify-start gap-4'>
        <figure className='rounded-3xl -bg--bg-gradient-onyx'>
          <img src='/images/my-avatar.png' alt='Yung Chun Tu' width='80' />
        </figure>

        <div className=''>
          <h1
            className='name mb-2 -text--fs-3 -font--fw-500 -tracking-wide -text--white-2'
            title='Yung Chun Tu'
          >
            Yung Chun Tu
          </h1>
          <p className='w-max rounded-lg -bg--onyx px-3 py-2 -text--fs-7 -font--fw-300 -text--white-1'>
            Backend Engineer
          </p>
        </div>

        <button
          className='info_more-btn absolute -top-4 -right-3.5 z-10 rounded-tl-none rounded-bl-2xl -bg--border-gradient-onyx p-2 -text--fs-7 -text--orange-yellow-crayola -shadow--shadow-2 -transition--transition-1 before:absolute before:inset-px before:-z-10 before:-bg--bg-gradient-jet before:-transition--transition-1 hover:-bg--bg-gradient-yellow-1 hover:before:-bg--bg-gradient-yellow-2'
          onClick={handleClick}
        >
          <span className='hidden'>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div
        className={`
        ${showMore ? 'opacity-1 visible' : 'invisible opacity-0'}
        -transition--transition-2`}
      >
        <div className='my-3 h-0.5 w-full -bg--jet'></div>
        <ul className='grid grid-cols-1 gap-4'>
          <li className='flex min-w-full items-center gap-4'>
            <div className='relative z-10 flex h-7 w-7 items-center justify-center rounded-lg -bg--border-gradient-onyx -text--orange-yellow-crayola -shadow--shadow-1 before:absolute before:inset-1 before:-z-10 before:-bg--eerie-black-1'>
              <IoMailOutline />
            </div>
            <div className='contact-info'>
              <p className='contact-title'>Email</p>
              <a href='mailto:ken888686@gmail.com' className='contact-link'>
                ken888686@gmail.com
              </a>
            </div>
          </li>
          {/*
          <li className='contact-item'>
            <div className='icon-box'>
              <IoPhonePortraitOutline />
            </div>
            <div className='contact-info'>
              <p className='contact-title'>Phone</p>
              <a href='tel:+12133522795' className='contact-link'>
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IoCalendarOutline />
            </div>
            <div className='contact-info'>
              <p className='contact-title'>Birthday</p>
              <time dateTime='1982-06-23'>June 23, 1982</time>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IoLocationOutline />
            </div>
            <div className='contact-info'>
              <p className='contact-title'>Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
          */}
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <a href='#' className='social-link'>
              <IoLogoFacebook />
            </a>
          </li>

          <li className='social-item'>
            <a href='#' className='social-link'>
              <IoLogoTwitter />
            </a>
          </li>

          <li className='social-item'>
            <a href='#' className='social-link'>
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
