import React from "react";
// import styled from "styled-components";
// import { SMALL_BREAKPOINT, MEDIUM_BREAKPOINT } from "./breakpoints";
import { Container } from "../common/templateStyles";
import NavBar from "../components/navBar";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <h1> About</h1>
      </Container>
    </React.Fragment>
  );
};

export default About;
