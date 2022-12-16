import React from 'react';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import Resume from './pages/Resume';

function App() {
  return (
    <main className='container mx-auto px-2 pt-3'>
      <Sidebar />
      <div className='flex flex-col gap-5'>
        <About />
        <Resume />
      </div>
    </main>
  );
}

export default App;
