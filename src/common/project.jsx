import React from "react";
// import "./ProjectCard.css";
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

const Project = ({ header, url, description, github }) => {
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
  const Style = styled.div`
    .text {
      font-size: 30px
      flex-direction: row;
      position: absolute;
      top: 90%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }
    
    a {
      margin-left: 10px;
    }

    @media (min-width: ${MEDIUM_BREAKPOINT}) {
      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.5s ease;
        background: linear-gradient(270deg, #297cfe 0, #24dfbe 100%);
      }

      .here:hover .overlay {
        opacity: 1;
      }

      .text {
        font-size: 30px
        flex-direction: row;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  `;
  return (
    <Container>
      <Style className="look">
        <Card className="here">
          {/*  header and description for each project */}
          <div className="text-center"> {header} </div>
          <p>{description}</p>
          <div className="overlay">
            <div className="text">
              <a href={url} target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href={github} target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </Card>
      </Style>
    </Container>
  );
};

export default Project;
