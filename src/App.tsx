import React from 'react';
import Button from './Button';
import { BsGoogle, BsFacebook, BsInstagram, BsLine, BsLinkedin } from 'react-icons/bs';

function App() {
  return (
    <>
      <div>
        <Button primary onClick={() => console.log('Google')}>
          <BsGoogle />
          Primary
        </Button>
        <Button secondary onMouseLeave={() => console.log('Mouse')}>
          <BsFacebook />
          Secondary
        </Button>
        <Button success>
          <BsInstagram />
          Success
        </Button>
        <Button warning>
          <BsLine />
          Warning
        </Button>
        <Button danger>
          <BsLinkedin />
          Danger
        </Button>
      </div>
      <div>
        <Button primary outline>
          Primary
        </Button>
        <Button secondary outline>
          Secondary
        </Button>
        <Button success outline>
          Success
        </Button>
        <Button warning outline>
          Warning
        </Button>
        <Button danger outline>
          Danger
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Primary
        </Button>
        <Button secondary rounded>
          Secondary
        </Button>
        <Button success rounded>
          Success
        </Button>
        <Button warning rounded>
          Warning
        </Button>
        <Button danger rounded>
          Danger
        </Button>
      </div>
    </>
  );
}

export default App;
