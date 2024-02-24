import { ReactNode } from 'react';

function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className='relative z-10 flex h-7 w-7 items-center justify-center rounded-lg -bg--gradient-onyx -text--orange-yellow-crayola shadow-1 before:absolute before:inset-[1px] before:-z-10 before:rounded-[inherit] before:-bg--eerie-black-1'>
      {children}
    </div>
  );
}

export default IconBox;
