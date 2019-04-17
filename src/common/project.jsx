import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Container } from "./templateStyles";

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
    height: 200px;
    background-color: #fff;
    border-radius: 20px;
    color: black;
    box-shadow: 10px 10px 5px black;
  `;

  return (
    <Container>
      <Card>
        {/* <img src="../images/Xoolo.png" alt="" className="card-img-top image" /> */}

        <div className="">
          {/*  header and description for each project */}
          <div className="text-center"> {header} </div>
          <p className="desc-text-center">{description} </p>
        </div>

        <div className="middle">
          {/* When viewed on small devices each card links to the demo website */}
          <div className="text">
            {/* // links to the github and demo of each project */}
            <a
              className="navbar-branded"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="navbar-branded"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Project;
