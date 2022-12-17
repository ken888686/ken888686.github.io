import React, { ReactNode } from 'react';

function Article({ className, children }: { className: string; children: ReactNode }) {
  return (
    <article
      className={`z-10 rounded-2xl border border-solid -border--jet -bg--eerie-black-2 p-4 -text--white-1 shadow-1 ${className}`}
    >
      {children}
    </article>
  );
}

export default Article;
