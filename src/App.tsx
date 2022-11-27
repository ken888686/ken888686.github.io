import React from 'react';
import Button from './Button';

function App() {
  return (
    <>
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
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
