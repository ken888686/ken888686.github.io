import React, { ReactNode } from 'react';

function Header({ children }: { children: ReactNode }) {
  return (
    <header>
      <h2 className='relative mb-4 rounded-sm pb-2 text-1 font-bold capitalize -text--white-2 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:rounded-md after:-bg--gradient-yellow'>
        {children}
      </h2>
    </header>
  );
}

export default Header;
