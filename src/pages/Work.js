import React from "react";
import logo from "../logo.jpg";
import "../styles/Work.css";
import NavBar from "../components/NavBar";
const Work = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h1> Making some major improvements to this page</h1>
          <a
            className="btn btn-lg bg-white text-center"
            href="https://github.com/nwillia3"
            target="_blank"
            rel="noopener noreferrer"
          >
            My github repos
          </a>
          <h1> This page will be back before you know it </h1>
        </div>

        <img src={logo} className="col-sm-12 col-md-8 img-fluid" alt="logo" />
      </div>
    </React.Fragment>
  );
};

export default Work;
