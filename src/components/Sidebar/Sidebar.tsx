import React, { useState, useTransition } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import ContactList from './ContactList';
import SocialList from './SocialList';
import Separator from '../Common/Separator';
import Avatar from './Avatar';
import Tag from '../Common/Tag';

const Sidebar = () => {
  const [isPending, startTransition] = useTransition();
  const [showMore, setShowMore] = useState(true);

  const handleClick = () => {
    startTransition(() => {
      setShowMore(!showMore);
    });
  };

  return (
    <aside
      className={`z-10 mb-4
      ${showMore ? 'max-h-96' : 'max-h-28'}
      overflow-hidden rounded-2xl border -border--jet -bg--eerie-black-2 p-4 -text--white-2 shadow-1 duration-500 ease-in-out`}
    >
      <div className='relative flex items-center justify-start gap-4'>
        <Avatar imageLink='/images/my-avatar.png' name='Yung Chun Tu' />
        <div className=''>
          <h1 className='mb-2 text-lg font-medium -tracking-wide -text--white-2'>
            <span className='-from--test bg-gradient-to-r -to--eerie-black-1'>Yung Chun Tu</span>
          </h1>
          <div className='flex gap-2'>
            <Tag title='C# Developer' />
            <Tag title='Backend Engineer' />
          </div>
        </div>
        <button
          className='absolute -top-4 -right-4 z-10 flex items-center justify-center gap-2 rounded-tr-xl rounded-bl-xl -bg--gradient-onyx p-3 text-lg -text--orange-yellow-crayola shadow-2 transition-all before:absolute before:inset-[1px] before:-z-10 before:rounded-[inherit] before:transition-all hover:-text--eerie-black-1 before:hover:-bg--orange-yellow-crayola'
          onClick={handleClick}
          type='button'
        >
          <span className='hidden md:inline-block'>Show Contacts</span>
          {showMore ? <IoChevronUp className='text-xl' /> : <IoChevronDown className='text-xl' />}
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
