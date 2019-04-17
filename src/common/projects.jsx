import React, { Component } from "react";
import Project from "./project";
import { data, miniProjects } from "../common/data";
import ProjectTitle from "../components/project-title";
import "../styles/project.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "./breakpoints";

const Content = styled.div`
  background: #f9faff
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: ${SMALL_BREAKPOINT}) {
  }

  @media (max-width: ${MEDIUM_BREAKPOINT}) {
  }

  @media (min-width: ${LARGE_BREAKPOINT}) {
    padding: auto 130px

  }

  @media (min-width: ${XLARGE_BREAKPOINT}) {
    padding: auto 130px
  }
`;

const Title = styled.h2`
  text-align: left;

  font-family: adobe-caslon-pro, serif;
  color: #5982ff;
  font-weight: 700;
  line-height: 1;
  margin: 0 3px;
  padding: 0;
  font-size: 2.8rem;
`;

const Work = styled.div`
  padding-top: 30px;
  display: flex
  flex-drection: row

  >p {
    font-family: canada-type-gibson, sans-serif;
    line-height: normal;
    font-size: 19.555px;
  }

  @media (max-width: ${MEDIUM_BREAKPOINT}) {
    flex-direction: column;
  }
`;

class Projects extends Component {
  state = {
    portfolio: { data },
    demos: { miniProjects }
  };

  render() {
    const { data } = this.state.portfolio;
    return (
      <React.Fragment>
        <Title> Portfolio Highlights</Title>

        <Content>
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
        </Content>
      </React.Fragment>
    );
  }
}

export default Projects;
