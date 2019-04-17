import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Container } from "./templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "./breakpoints";

// impor

const Project = ({ header, url, description }) => {
  const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    border-radius: 0.25rem;
    display: flex;
    margin: 10px;
    background: #fff;

    border-radius: 20px;
    color: black;
    box-shadow: 10px 10px 5px #7e7e7e;

    > p {
      font-size: 16px;
      margin: 5px 20px;
    }

    @media (max-width: ${SMALL_BREAKPOINT}) {
      min-height: 250px;
    }
    @media (max-width: ${MEDIUM_BREAKPOINT}) {
      min-height: 200px;
    }
    @media (max-width: ${LARGE_BREAKPOINT}) {
    }
    @media (min-width: ${XLARGE_BREAKPOINT}) {
    }
  `;

  return (
    <Container>
      <Card className="here">
        {/*  header and description for each project */}
        <div className="text-center"> {header} </div>
        <p>
          {description}

          <span>
            {" "}
            <Link to="/projects"> Project </Link>
          </span>
        </p>
      </Card>
    </Container>
  );
};

export default Project;
