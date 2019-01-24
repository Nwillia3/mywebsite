import React from "react";

const Project = ({ header, image, github }) => {
  return (
    <div className="card">
      <img src={image} alt="/" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <p className="card-text"> Some card text</p>

        <a href={github} target="_blank" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default Project;
