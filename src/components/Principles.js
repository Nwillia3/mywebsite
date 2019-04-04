import React from "react";
import "../styles/principles.css";
import "../styles/projectTitle.css";

const Principles = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1> The Principles I Stand By</h1>
      </div>
      <div className="row">
        <div className="" id="item">
          <h3>Results Focused</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </div>
        <div className="" id="item">
          <h3> Open Minded</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </div>
        <div className="" id="item">
          <h3>Adaptable Approach</h3>
          <p>
            I like to work in a fast-moving and unpredictable environment. I’m
            flexible enough to deal with those changes and still meet deadlines.
          </p>
        </div>
        <div className="" id="item">
          <h3>Straightforward Thinking</h3>
          <p>
            I use a simple, clear approach to building product. I can provide
            ideas, recommendations, and advice to help you achieve that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principles;
