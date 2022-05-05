import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
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
      <Skills />
    </>
  );
}

export default App;
