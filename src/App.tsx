import React from 'react';
import Button from './Button';

function App() {
  return (
    <>
      <div>
        <Button primary={false}>Primary</Button>
      </div>
      <div>
        <Button>Secondary</Button>
      </div>
      <div>
        <Button>Success</Button>
      </div>
      <div>
        <Button>Warning</Button>
      </div>
      <div>
        <Button>Danger</Button>
      </div>
      <div>
        <Button>Outline</Button>
      </div>
    </>
  );
}

export default App;
