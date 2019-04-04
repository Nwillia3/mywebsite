import React, { Component } from "react";
import Project from "./project";
import { data, miniProjects } from "../common/data";
import ProjectTitle from "../components/project-title";
import "../styles/project.css";
import { Link } from "react-router-dom";

class Projects extends Component {
  state = {
    portfolio: { data },
    demos: { miniProjects }
  };

  render() {
    const { data } = this.state.portfolio;
    // const { miniProjects } = this.state.demos;
    return (
      <div className="container Project">
        <ProjectTitle />
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
        <div className="details">
          <h3>
            Each project was done to either hone a particular set of skills or
            to put out to the world an idea I had. <br /> <br />
            More of my projects can be found{" "}
            <Link to="/projects" className="btn btn-lg button">
              Here
            </Link>
          </h3>
        </div>
        {/* <h1 className="text-center"> Mini Projects </h1> */}
        {/* <div className="row">
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
        </div> */}
      </div>
    );
  }
}

export default Projects;
