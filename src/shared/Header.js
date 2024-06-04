import React from "react";
const Header = (
  {user,setUser}
) => {
  return (
    <div>
      <header>
        <nav>
          {/* <!-- Navigation unordered lists--> */}
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">
                <img
                  src="/public/images/CodeSquad-Comics-logo.png"
                  alt="CodeSquad Comics logo"
                  rel="noopener
              noreferrer"
                  className="logo-size"
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
