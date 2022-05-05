import Navbar from './components/Navbar';
import About from './components/About';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import 'bootstrap-icons/font/bootstrap-icons.scss';

/**
 * App component
 * @returns {React.Component}
 */
function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <About className="flex-1" />
      </div>
      {/* <Projects /> */}
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
