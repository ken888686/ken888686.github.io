import React from 'react';

function Tag({ title }: { title: string }) {
  return (
    <p className='w-max rounded-lg -bg--onyx px-3 py-2 text-xs font-light -text--white-1'>
      {title}
    </p>
  );
}

export default Tag;
