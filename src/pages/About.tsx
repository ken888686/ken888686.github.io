import moment from 'moment';
import React, { useState } from 'react';
import Article from '../components/Article/Article';
import Header from '../components/Article/Header';

function About() {
  const [duration, setDuration] = useState(moment().diff(moment('2016-08-15'), 'years'));

  return (
    <Article className=''>
      <Header>About me</Header>
      <section className='text-6 font-light leading-relaxed -text--light-gray'>
        <p className=''>
          I&apos;m <span className=''>C#.NET Engineer</span> from Chiayi, Taiwan.
        </p>
        <p>
          C# Development with {duration} years software and backend experience for a wide range of
          projects and industries.
        </p>
        <p>Enjoys technical challenges and providing elegant coding solutions.</p>
      </section>
    </Article>
  );
}

export default About;
