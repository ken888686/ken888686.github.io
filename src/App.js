import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

/**
 * App component
 * @returns {React.Component}
 */
function App() {
  return (
    <main className="h-screen bg-gradient-to-b from-slate-400 to-slate-800">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
