import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="hero-section">
        <header>
          <div className="hero">
            <nav className="navbar">
              <Link className="logo" to="http://">
                <img
                  src="https://storage.googleapis.com/yoga_data/general/company/20221209_CMPNY_1_30028149942.png"
                  alt="logo"
                />
              </Link>
              <ul className="links">
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Service</Link>
                </li>
                <li>
                  <Link to="">Gallery</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
              <div className="buttons">
                <Link to="/explore">
                  <button className="action-btn" type="button">
                    Explore
                  </button>
                </Link>
                <Link to="/">
                  <button className="action-btn" type="button">
                    Login
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="hero-search">
          <h1>
            Welcome To <span>YOGPATH</span>
          </h1>
          <input
            className="input"
            type="text"
            placeholder="Search your Yoga Teacher"
          />
          <button className="action-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
