import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div> */}
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="#features">Templates</a>
          </p>
          <p>
            <a href="#features">Examples</a>
          </p>
          <p>
            <a href="#blog">Pricing</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          <a href="/login">Login</a>
        </p>
        <button type="button">
          <a href="/signup">Sign up</a>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#features">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>
                <a href="/login">Sign in</a>
              </p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
