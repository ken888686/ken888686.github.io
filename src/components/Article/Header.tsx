import React, { ReactNode } from 'react';

function Header({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <header>
      <h2
        className={`${className} relative mb-4 rounded-sm pb-2 text-2xl font-bold capitalize -text--white-2 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:rounded-md after:-bg--gradient-yellow`}
      >
        {children}
      </h2>
    </header>
  );
}

export default Header;
