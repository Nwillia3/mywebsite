import React from "react";
import NavBar from "../components/navBar";
import styled from "styled-components";
import { Container } from "../common/templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "../common/breakpoints";
import photo from "../images/photo.jpeg";

const About = () => {
  const IMG = styled.img`

    width: 50%
    height:30%
    border-radius: 16px;
    max-width: 100%;
   
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${MEDIUM_BREAKPOINT}) {
      flex-direction: row;
    }
  `;
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Wrapper>
          <IMG src={photo} />
          <h1>
            <span> About Me: </span>I Did Not Choose The Coding Life, The Coding
            Life Chose Me.
          </h1>
        </Wrapper>

        {/* <img src={photo} alt="image" width="200px" /> */}
      </Container>
    </React.Fragment>
  );
};

export default About;
