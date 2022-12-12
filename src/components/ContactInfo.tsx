import React from 'react';
import IconBox from './IconBox';

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
      <IconBox>{icon}</IconBox>
      <div className='w-[calc(100%-46px)] max-w-[calc(100%-46px)]'>
        <p className='text-xs uppercase -text--light-gray-70'>{title}</p>
        {children}
      </div>
    </li>
  );
}

export default ContactInfo;
