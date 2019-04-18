import React, { Component } from "react";
import Project from "./project";
import { data, miniProjects } from "../common/data";
import "../styles/project.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Wrapper } from "./templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "./breakpoints";

const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 10px 15px 50px 15px;

  @media (max-width: ${SMALL_BREAKPOINT}) {
  }

  @media (min-width: ${MEDIUM_BREAKPOINT}) {
    padding: 30px 15px 50px 15px;
  }

  @media (min-width: ${LARGE_BREAKPOINT}) {
    padding: auto 130px;
  }

  @media (min-width: ${XLARGE_BREAKPOINT}) {
    padding: auto 130px;
  }
`;

const Title = styled.h2`
  text-align: left;

  font-family: adobe-caslon-pro, serif;
  color: #5982ff;
  font-weight: 700;
  line-height: 1;

  margin: 5px 15px;
  padding: 10px 17px;
  font-size: 2.8rem;

  @media (min-width: ${MEDIUM_BREAKPOINT}) {
    margin: 5px 3px;
    padding: 10px;
  }
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

  @media (min-width: ${MEDIUM_BREAKPOINT}) {
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
      <Wrapper>
        <Container>
          <Title> Portfolio Highlights</Title>

          <Content className="check">
            <Work>
              {data.map(pro => (
                <div key={pro.id}>
                  <Project
                    header={pro.title}
                    url={pro.url}
                    github={pro.github}
                    description={pro.description}
                    key={pro.id}
                  />
                  <br />
                </div>
              ))}
            </Work>
          </Content>
        </Container>
      </Wrapper>
    );
  }
}

export default Projects;
