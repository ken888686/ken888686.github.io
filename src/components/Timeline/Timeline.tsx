import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import experience from '../../models/experience';
import IconBox from '../Common/IconBox';
import TimelineList from './TimelineList';

function Timeline({
  title,
  icon = <IoBookOutline />,
  experienceList,
}: {
  title: string;
  icon?: JSX.Element;
  experienceList: experience[];
}) {
  return (
    <section className='mb-8'>
      <div className='mb-6 flex items-center gap-5'>
        <IconBox>{icon}</IconBox>
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
      <TimelineList experienceList={experienceList} />
    </section>
  );
}

export default Timeline;
