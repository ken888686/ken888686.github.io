import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './pages/About';
import Resume from './pages/Resume';

function App() {
  return (
    <main className='container mx-auto px-2 pt-3'>
      <Sidebar />
      <div className='mb-2 flex flex-col gap-4'>
        <About />
        <Resume />
      </div>
    </main>
  );
}

export default App;
