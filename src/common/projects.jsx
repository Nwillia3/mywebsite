import React, { Component } from "react";
import Project from "./project";
import data from "../common/data";

class Projects extends Component {
  state = {
    portfolio: { data }
  };

  renderUrl = url => {
    return this.state.portfolio.data.url;
  };

  renderDescription = text => {
    return this.state.portfolio.description[text];
  };
  render() {
    const { data } = this.state.portfolio;
    return (
      <div className="container">
        <div className="row">
          {data.map(pro => (
            <div className="col-md-4 col-sm-12">
              <Project
                header={pro.title}
                url={pro.url}
                description={pro.title}
              />
              <br />
            </div>
          ))}
          {/* {titles.map(pro => (
            <div className="col-md-4 col-sm-12">
              <Project
                header={pro}
                image={imageUrl}
                github={this.renderUrl(titles.indexOf(github))}
                description={this.renderDescription(titles.indexOf(pro))}
              />
              <br />
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default Projects;
