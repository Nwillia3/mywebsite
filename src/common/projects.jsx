import React, { Component } from "react";
import Project from "./Project";
import { data, miniProjects } from "../common/data";

class Projects extends Component {
  state = {
    portfolio: { data },
    demos: { miniProjects }
  };

  // renderUrl = url => {
  //   return this.state.portfolio.data.url;
  // };

  // renderDescription = text => {
  //   return this.state.portfolio.description[text];
  // };
  render() {
    const { data } = this.state.portfolio;
    const { miniProjects } = this.state.demos;
    return (
      <div className="container">
        <div className="row">
          {data.map(pro => (
            <div className="col-md-4 col-sm-12" key={pro.id}>
              <Project
                header={pro.title}
                url={pro.url}
                description={pro.description}
                key={pro.id}
              />
              <br />
            </div>
          ))}
        </div>
        <br />
        <h1 className="text-center"> Mini Projects </h1>
        <div className="row">
          {miniProjects.map(pro => (
            <div className="col-md-4 col-sm-12" key={pro.id}>
              <Project
                header={pro.title}
                url={pro.url}
                description={pro.title}
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
