import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main className='container mx-auto px-2 pt-3'>
      <Sidebar />
      <Navbar />
      <About />
    </main>
  );
}

export default App;
