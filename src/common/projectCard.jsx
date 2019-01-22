import React, { Component } from "react";
import axios from "axios";

class ProjectCard extends Component {
  state = {
    projects: []
  };
  async componentDidMount() {
    let url = "https://api.github.com/users/nwillia3/repos?per_page=100";
    const { data: projects } = await axios.get(url);

    this.setState({ projects });
  }

  render() {
    const { projects } = this.state;
    console.log(projects);
    return (
      <div className="container">
        <div className="row">
          {projects.map(pro => (
            <div className="col-sm-12 col-md-4">
              <div className="card border-primary mb-3">
                <div className="card-header">
                  <h3>{pro.name}</h3>
                </div>
                <div className="card-body text-primary">
                  <div className="">
                    <a href={pro.html_url}> Github link</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
