import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="text-center">
          <h1>Projects</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Project
              header="this is a prop"
              image="https://picsum.photos/200/?random"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
