import React from 'react';

function ContactInfo({
  id,
  icon,
  title,
  children,
}: {
  id: number;
  icon: JSX.Element;
  title: string;
  children: JSX.Element;
}) {
  return (
    <li key={id} className='flex min-w-full items-center gap-4'>
      <div className='relative z-10 flex h-7 w-7 items-center justify-center rounded-lg -bg--gradient-onyx -text--orange-yellow-crayola -shadow--shadow-1 before:absolute before:inset-1 before:-z-10 before:-bg--eerie-black-1'>
        {icon}
      </div>
      <div className='w-[calc(100%-46px)] max-w-[calc(100%-46px)]'>
        <p className='text-xs uppercase -text--light-gray-70'>{title}</p>
        {children}
      </div>
    </li>
  );
}

export default ContactInfo;
