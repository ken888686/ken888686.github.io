import React from 'react';

function ContentCard({ children }: { children: JSX.Element }) {
  return (
    <div className='relative z-10 cursor-pointer rounded-2xl -bg--gradient-onyx p-4 pt-11 shadow-2 before:absolute before:inset-[1px] before:-z-10 before:rounded-[inherit] before:-bg--gradient-jet'>
      {children}
    </div>
  );
}

export default ContentCard;
