export default function Navbar() {
  const showContent = false;
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="text-xl normal-case btn btn-ghost">
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
          {
            showContent
              ? (
                <li>
                  <a href="/">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a href="/">
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Submenu 2
                      </a>
                    </li>
                  </ul>
                </li>
              )
              : ''
          }
          <li>
            <a href="/">
              ABOUT ME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
