import React from 'react';
import Article from '../components/Article/Article';
import Header from '../components/Article/Header';

function About() {
  return (
    <Article className=''>
      <Header>About me</Header>
      <section className='text-6 font-light leading-relaxed -text--light-gray'>
        <p className='mb-4'>
          I&apos;m Backend Engineer from Chiayi, Taiwan. Enjoys technical challenges and providing
          elegant coding solutions.
        </p>
      </section>
    </Article>
  );
}

export default About;
