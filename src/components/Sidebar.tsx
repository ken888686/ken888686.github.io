import React, { useState, useTransition } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import ContactList from './ContactList';
import SocialList from './SocialList';
import Separator from './Separator';

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
      ${showMore ? 'max-h-96' : 'max-h-28'}
      overflow-hidden rounded-2xl border -border--jet -bg--eerie-black-2 p-4 -text--white-2 -shadow--shadow-1 transition-all duration-500 ease-in-out`}
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
        transition-all duration-500 ease-in-out`}
      >
        <Separator />
        <ContactList />
        <Separator />
        <SocialList />
      </div>
    </aside>
  );
};

export default Sidebar;
