import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <Link className="navbar-branded" to="/">
        NW
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Project
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Social Media
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                href="https://github.com/nwillia3"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="dropdown-item"
                href="https://www.linkedin.com/in/neilwilliams9/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
