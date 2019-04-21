import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Container } from "./templateStyles";

import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "./breakpoints";

const Project = ({ header, url, description, github }) => {
  const Header = styled.h3`
    color: #0c1e29 !important;
    margin-bottom: 1rem !important;
    font-weight: bold;
  `;

  const Text = styled.div`
    box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
      0 5px 15px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column
    padding: 1.5rem;
    flex: 1;
    background: #fff;
    line-height: 1.25;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    p {
      font-size: .875rem
      color: #4e616c
    }
  `;

  const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-content center;
    justify-content: space-between;
    a {
      padding-left: 10px;
      
    }
  `;

  return (
    <Container>
      <div class="main">
        <div class="box" />
        <Text>
          <Header> {header} </Header>
          <p>{description}</p>
          <Icon>
            <a href={url} target="_blank">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{
                  fontSize: "30px",
                  color: "#a9b7be"
                }}
              />
            </a>
            <a href={github} target="_blank">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  fontSize: "30px",
                  color: "#a9b7be"
                }}
              />
            </a>
          </Icon>
        </Text>
      </div>
    </Container>
  );
};

export default Project;
