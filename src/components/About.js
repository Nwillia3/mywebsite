import React from "react";
import "../styles/about.css";
import styled from "styled-components";
import { Container, Wrapper } from "../common/templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "../common/breakpoints";
import photo from "../images/Photo.jpeg";

const About = () => {
  const IMG = styled.img``;
  return (
    <Container>
      <h1>
        <span> About Me: </span>I Did Not Choose The Coding Life, The Coding
        Life Chose Me.
      </h1>
      <IMG>
        {" "}
        <img src={photo} alt="image" />{" "}
      </IMG>
    </Container>
  );
};

export default About;
