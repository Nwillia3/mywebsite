import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container bgColor">
      <div className="jumbo row">
        <div className="col-md-6">
          <h2 className="header-primary ">
            I Like To Build Things... Check These Out
            <Link
              className="btn btn-dark btn-lg"
              style={{ marginLeft: "20px", color: "white" }}
              to="/projects"
            >
              Projects
            </Link>
          </h2>
        </div>
        <div className="col-md-6">
          <img
            src="https://uploads-ssl.webflow.com/583c5192e11409586f8cc2e4/5c976451d784214c58919c56_building-product.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
