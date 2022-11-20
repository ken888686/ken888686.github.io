import Navbar from '../Navbar';
import About from '../About';
import Me from '../../assets/me.jpeg';
/**
 * Header component
 * @returns {React.Component}
 */
export default function Header() {
  return (
    <div
      className="flex flex-col h-screen bg-right bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${Me})`,
      }}
    >
      <Navbar />
      <div className="flex-1">
        <About />
      </div>
    </div>
  );
}
