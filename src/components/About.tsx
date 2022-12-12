import React from 'react';
import Article from './Article';

function About() {
  return (
    <Article className=''>
      <header>
        <h2 className='relative mb-4 rounded-sm pb-2 -text--fs-1 font-bold capitalize -text--white-2 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:-bg--gradient-yellow'>
          About me
        </h2>
      </header>
      <section className='-text--fs-6 font-light leading-relaxed -text--light-gray'>
        <p className='mb-4'>
          I'm Backend Engineer from Chiayi, Taiwan. Enjoys technical challenges and providing
          elegant coding solutions.
        </p>
      </section>
    </Article>
  );
}

export default About;
