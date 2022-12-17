import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import experience from '../../models/experience';
import IconBox from '../Common/IconBox';
import TimelineList from './TimelineList';

function Timeline({
  title,
  icon = <IoBookOutline />,
  experience,
}: {
  title: string;
  icon?: JSX.Element;
  experience: experience[];
}) {
  return (
    <section className='mb-8'>
      <div className='mb-6 flex items-center gap-5'>
        <IconBox>{icon}</IconBox>
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
      <TimelineList experience={experience} />
    </section>
  );
}

export default Timeline;
