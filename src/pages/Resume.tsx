import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import Article from '../components/Article/Article';
import Header from '../components/Article/Header';

function Resume() {
  return (
    <Article className=''>
      <Header>Resume</Header>
      <section className='mb-7'>
        <div className='mb-6 flex items-center gap-4'>
          <div className='icon-box'>
            <IoBookOutline />
          </div>

          <h3 className='h3'>Education</h3>
        </div>
        <ol className='ml-11 text-6'>
          <li className='relative mb-5 before:absolute before:-top-6 before:-left-8 before:h-[calc(100%+50px)] before:w-[1px] before:-bg--jet after:absolute after:top-1 after:-left-8 after:h-[6px] after:w-[6px] after:rounded-[50%] after:-bg--gradient-yellow after:shadow-inner'>
            <h4 className='mb-2 text-lg leading-[1.3]'>University school of the arts</h4>
            <span className='leading-[1.6] -text--vegas-gold'>2007 — 2008</span>
            <p className='timeline-text'>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti,
              quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
    </Article>
  );
}

export default Resume;
