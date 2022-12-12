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
      overflow-hidden rounded-2xl border -border--jet -bg--eerie-black-2 p-4 -text--white-2 -shadow--shadow-1 duration-500 ease-in-out`}
    >
      <div className='relative flex items-center justify-start gap-4'>
        <figure className='rounded-3xl -bg--gradient-onyx'>
          <img src='/images/my-avatar.png' alt='Yung Chun Tu' width='80' />
        </figure>
        <div className=''>
          <h1
            className='name mb-2 text-lg font-medium -tracking-wide -text--white-2'
            title='Yung Chun Tu'
          >
            <span className='-from--test bg-gradient-to-r -to--eerie-black-1'>Yung Chun Tu</span>
          </h1>
          <p className='w-max rounded-lg -bg--onyx px-3 py-2 text-xs font-light -text--white-1'>
            Backend Engineer
          </p>
        </div>
        <button
          className='absolute -top-4 -right-4 z-10 rounded-tr-xl rounded-bl-xl -bg--gradient-onyx p-3 text-lg -text--orange-yellow-crayola -shadow--shadow-2 transition-all before:absolute before:inset-[1px] before:-z-10 before:rounded-[inherit] before:transition-all hover:-text--eerie-black-1 before:hover:-bg--orange-yellow-crayola'
          onClick={handleClick}
          type='button'
        >
          <span className='hidden'>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div
        className={`
        ${showMore ? 'opacity-1 visible' : 'invisible opacity-0'}
        duration-500 ease-in-out`}
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
