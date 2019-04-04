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
        <a
          className="navbar-branded"
          href="https://www.linkedin.com/in/neilwilliams9/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>

        <a
          className="navbar-branded"
          href="https://github.com/nwillia3"
          rel="noopener noreferrer"
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
