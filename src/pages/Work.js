import React from "react";
import mac from "../logo.jpg";
import "../styles/Work.css";
import NavBar from "../components/navBar";
import styled from "styled-components";
import { MEDIUM_BREAKPOINT } from "../common/breakpoints";
// import { Container } from "../common/templateStyles";

const Work = () => {
  const Wrapper = styled.div`
    background: url(${mac}) no-repeat fixed center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    background-size: 100% 100%;
    @media (min-width: ${MEDIUM_BREAKPOINT}) {
      height: 100vh;
    }
  `;

  const Text = styled.div`
    display: flex;
    justify-content: right;
  `;

  return (
    <React.Fragment>
      <NavBar />

      <Wrapper>
        <Text>
          {/* <h1> Making some major improvements to this page</h1> */}
          {/* <h1> This page will be back before you know it </h1> */}
        </Text>
      </Wrapper>

      {/* <div className="row">
        <div className="col-sm-12 col-md-4">
          <h1> Making some major improvements to this page</h1>
          <a
            className="btn btn-lg bg-white text-center"
            href="https://github.com/nwillia3"
            target="_blank"
            rel="noopener noreferrer"
          >
            My github repos
          </a>
          <h1> This page will be back before you know it </h1>
        </div>

        <img src={mac} className="col-sm-12 col-md-8 img-fluid" alt="logo" />
      </div> */}
    </React.Fragment>
  );
};

export default Work;
