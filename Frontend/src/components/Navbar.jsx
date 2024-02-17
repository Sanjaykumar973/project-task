import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FormContext from "../../FormContext";

function Navbar() {
  const { user, logout } = useContext(FormContext);

  return (
    <div>
      <div className="nav-section">
        <header>
          <div className="hero">
            <nav className="navbar">
              <Link className="logo" to="/home">
                <img
                  src="https://storage.googleapis.com/yoga_data/general/company/20221209_CMPNY_1_30028149942.png"
                  alt="logo"
                />
              </Link>
              <ul className="links">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/home">About</Link>
                </li>
                <li>
                  <Link to="/home">Service</Link>
                </li>
                <li>
                  <Link to="/home">Gallery</Link>
                </li>
                <li>
                  <Link to="/home">Contact</Link>
                </li>
              </ul>
              <div className="buttons">
                <Link to="/explore">
                  <button className="action-btn" type="button">
                    Explore
                  </button>
                </Link>
                {user ? (
                  <Link to="/">
                    <button className="action-btn" type="button">
                      {user && user.name}( Logout )
                    </button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button className="action-btn" type="button">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
