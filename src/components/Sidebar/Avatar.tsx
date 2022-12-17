import React from 'react';

function Avatar({ imageLink, name }: { imageLink: string; name: string }) {
  return (
    <figure className='rounded-3xl -bg--gradient-onyx'>
      <img src={imageLink} alt={name} width='80' />
    </figure>
  );
}

export default Avatar;
