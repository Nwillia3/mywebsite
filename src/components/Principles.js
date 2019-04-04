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
            You have business goals you need to achieve. I have the knowledge
            and expertise to help you design extraordinary digital products that
            meet those goals.
          </p>
        </div>
        <div className="" id="item">
          <h3> Open Minded</h3>
          <p>
            You share ideas about your product. I refine and polish those ideas
            into powerful, high-fidelity designs that will enhance your users
            experience.
          </p>
        </div>
        <div className="" id="item">
          <h3>Adaptable Approach</h3>
          <p>
            You work in a fast-moving and unpredictable environment. I’m
            flexible enough to deal with those changes and still meet your
            deadlines.
          </p>
        </div>
        <div className="" id="item">
          <h3>Straightforward Thinking</h3>
          <p>
            You need a simple, clear approach to designing your product. I
            provide ideas, recommendations, and expert advice to help you
            achieve that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principles;
