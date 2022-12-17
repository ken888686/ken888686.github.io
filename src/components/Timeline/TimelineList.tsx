import React from 'react';
import TimelineItem from './TimelineItem';
import experience from '../../models/experience';

function TimelineList({ experienceList }: { experienceList: experience[] }) {
  const renderList = [...experienceList].reverse().map((x) => {
    return <TimelineItem key={x.id} experience={x} />;
  });

  return <ol className='ml-11 text-sm'>{renderList}</ol>;
}

export default TimelineList;
