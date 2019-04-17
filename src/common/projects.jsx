import React, { Component } from "react";
import Project from "./project";
import { data, miniProjects } from "../common/data";
import ProjectTitle from "../components/project-title";
import "../styles/project.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./templateStyles";
import { SMALL_BREAKPOINT, MEDIUM_BREAKPOINT } from "./breakpoints";

const Title = styled.h2`
  margin-bottom: 4rem;
  text-align: left;
  padding-top: 2.66667rem;

  font-family: adobe-caslon-pro, serif;
  color: #5982ff;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  padding: 0;
  font-size: 2.8rem;
`;

const Work = styled.div`
  background: #f9faff;
  padding-top: 30px;
  display: flex
  flex-drection: row
    
  @media (max-width: ${MEDIUM_BREAKPOINT}) {
    flex-direction: column

  }



`;

class Projects extends Component {
  state = {
    portfolio: { data },
    demos: { miniProjects }
  };

  render() {
    const { data } = this.state.portfolio;
    // const { miniProjects } = this.state.demos;
    return (
      <Container style={{ backgroundColor: "#f9faff" }}>
        <Title> Portfolio Highlights</Title>

        <Work>
          {data.map(pro => (
            <div key={pro.id}>
              <Project
                header={pro.title}
                url={pro.url}
                description={pro.description}
                key={pro.id}
              />
              <br />
            </div>
          ))}
        </Work>
        <Work>
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
        </Work>
      </Container>
    );
  }
}

export default Projects;
