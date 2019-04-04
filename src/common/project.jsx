import React from "react";
import "./ProjectCard.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// impor

const Project = ({ header, img, url, description }) => {
  return (
    <div className="carded">
      <img src="../images/Xoolo.png" alt="" className="card-img-top image" />

      <div className="">
        {/*  header and description for each project */}
        <div className="text-center"> {header} </div>
        <p className="desc-text-center">{description} </p>
      </div>

      <div className="middle">
        {/* When viewed on small devices each card links to the demo website */}
        <div className="text">
          {/* // links to the github and demo of each project */}
          <a
            className="navbar-branded"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="navbar-branded"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
