import React from "react";
import "./ProjectCard.css";

const Project = ({ header, image, url, description }) => {
  return (
    <div className="carded">
      {/* <img src={image} alt="/" className="card-img-top" /> */}

      <div className="card-body">
        <div className=""> {header}</div>
        <p>{description}</p>
      </div>

      <div className="middle">
        <div className="card-content blue-text">
          <p>{description}</p>
        </div>
        <div className="text"> {header}</div>
      </div>
    </div>
  );
};

export default Project;
