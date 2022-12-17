import React from 'react';
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import ContactInfo from '../ContactInfo';
const contactInfo: { id: number; title: string; icon: JSX.Element; element: JSX.Element }[] = [
  {
    id: 1,
    title: 'Email',
    icon: <IoMailOutline />,
    element: (
      <a href='mailto:ken888686@gmail.com' className='text-sm -text--white-2'>
        ken888686@gmail.com
      </a>
    ),
  },
  {
    id: 2,
    title: 'Phone',
    icon: <IoPhonePortraitOutline />,
    element: (
      <a href='tel:+8180-7366-1993' className='text-sm -text--white-2'>
        +81 (80) 7366-1993
      </a>
    ),
  },
  {
    id: 3,
    title: 'Birthday',
    icon: <IoCalendarOutline />,
    element: (
      <time dateTime='1993-09-03' className='text-sm -text--white-2'>
        Sep 03, 1993
      </time>
    ),
  },
  {
    id: 4,
    title: 'Location',
    icon: <IoLocationOutline />,
    element: <address className='text-sm not-italic -text--white-2'>Tokyo, Japan</address>,
  },
];

function ContactList() {
  const renderContactInfo = contactInfo.map((x) => {
    return (
      <ContactInfo key={x.id} id={x.id} icon={x.icon} title={x.title}>
        {x.element}
      </ContactInfo>
    );
  });

  return <ul className='grid grid-cols-1 gap-4'>{renderContactInfo}</ul>;
}

export default ContactList;
