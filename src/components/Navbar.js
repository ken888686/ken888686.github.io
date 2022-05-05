export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="text-xl text-primary btn btn-ghost">
          Aaron
        </a>
      </div>
      <div className="flex-none">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <a href="/">
              HOME
            </a>
          </li>
          <li>
            <a href="/">
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
