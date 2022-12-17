import React from 'react';
import Article from '../components/Article/Article';
import Header from '../components/Article/Header';
import Timeline from '../components/Timeline/Timeline';
import experience from '../models/experience';

const careerList: experience[] = [
  {
    id: 0,
    company: 'Advantech Co., Ltd.',
    title: 'Software Engineer',
    type: 'Permanent',
    start: new Date('2016-08-15'),
    end: new Date('2019-03-11'),
    description: '',
  },
  {
    id: 1,
    company: 'Screea Corp.',
    title: 'Backend Engineer',
    type: 'Permanent',
    start: new Date('2019-03-25'),
    end: new Date('2019-12-31'),
    description: '',
  },
  {
    id: 2,
    company: 'Yungching Realty Co., Ltd.',
    title: 'Backend Engineer',
    type: 'Permanent',
    start: new Date('2020-02-03'),
    end: new Date('2022-06-10'),
    description: '',
  },
  {
    id: 3,
    company: 'TEKsystems at AppleQuality',
    title: 'Siri Language QA Engineer',
    type: 'Contract',
    start: new Date('2022-08-25'),
    end: new Date(),
    description: '',
  },
];

function Resume() {
  return (
    <Article className=''>
      <Header className={'mb-7'}>Resume</Header>
      <Timeline title='Career' experience={careerList} />
      {/* <Timeline title='Education' /> */}
    </Article>
  );
}

export default Resume;
