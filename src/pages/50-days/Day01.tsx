import React, { useState } from 'react';

const pictures = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1663593675908-ccb95d32b644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1669018560327-05b8f1a07b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1652121552068-e68d4e48ed4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1668381137695-151e39e5de46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1669542832243-68a0634d9117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1669569713247-3c57d88dd18f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  },
];

function Day01() {
  const [current, setCurrent] = useState(1);

  const renderPic = pictures.map((pic) => {
    return (
      <div
        key={pic.id}
        className={`relative m-2.5 h-4/5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat text-white duration-500 ease-in-out
        ${current === pic.id ? 'flex-5 hover:scale-105' : 'flex-0.5'}`}
        style={{ backgroundImage: `url(${pic.url})` }}
        onClick={() => {
          setCurrent(pic.id);
        }}
      >
        <h3
          className={`absolute bottom-5 left-5 m-0 text-2xl duration-300 ease-in-out ${
            current === pic.id ? 'opacity-1' : 'opacity-0'
          }`}
        >
          Picture: {pic.id}
        </h3>
      </div>
    );
  });

  return (
    <main className='m-0 flex h-screen items-center justify-center overflow-hidden px-5'>
      <div className='container flex h-5/6 items-center'>{renderPic}</div>
    </main>
  );
}

export default Day01;
