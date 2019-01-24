import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-branded" href="#">
        Navbar
      </a>
      <div className="ml-auto ">
        <a className="navbar-branded" href="#">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>

        <a className="navbar-branded" href="#">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
