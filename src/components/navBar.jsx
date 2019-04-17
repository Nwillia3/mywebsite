import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-branded" href="/">
        NW
      </a>
      <div className="ml-auto ">
        <Link className="navbar-branded" to="/about" rel="noopener noreferrer">
          About
        </Link>
        <a
          className="navbar-branded"
          href="https://www.linkedin.com/in/neilwilliams9/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>

        <a
          className="navbar-branded"
          href="https://github.com/nwillia3"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <Link
          className="navbar-branded"
          to="/projects"
          rel="noopener noreferrer"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
