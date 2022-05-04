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
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <About />
      </div>
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
