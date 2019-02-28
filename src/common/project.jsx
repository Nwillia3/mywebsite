import React from "react";
import "./ProjectCard.css";

const Project = ({ header, image, github, description }) => {
  return (
    <div className="carded">
      <img src={image} alt="/" className="card-img-top" />

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

// <div className="card-body">
//         <h5 className="card-title">{header}</h5>
//         <p className="card-text"> Some card text</p>

//         <a href={github} target="_blank" className="card-link">
//           Card link
//         </a>
//         <a href="#" className="card-link">
//           Another link
//         </a>
//       </div>
