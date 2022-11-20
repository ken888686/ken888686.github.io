// import Navbar from './components/Navbar';
// import About from './components/About';
// import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Layout/Header';

/**
 * App component
 * @returns {React.Component}
 */
function App() {
  return (
    <div className="bg-gradient-to-b from-base-100 to-base-300 ">
      {/* <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <About />
        </div>
      </div> */}
      <Header />
      {/* <Projects /> */}
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
