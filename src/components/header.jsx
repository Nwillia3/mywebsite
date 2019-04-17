import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "../common/breakpoints";

import styled from "styled-components";
import { Container } from "../common/templateStyles";

const Header = () => {
  const Head = styled.div`
    display: flex
    flex-direction: row
    height: 100vh
    justify-content: center
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    > h2 {
      font-size: 100px;
    }

    >img {
      width: 100%
    }


  @media (max-width: ${SMALL_BREAKPOINT}) {
    flex-direction: column

    > h2 {
      font-size: 40px
    }

  } 

    
  @media (max-width: ${MEDIUM_BREAKPOINT}) {
    flex-direction: column

  }


  @media (min-width: ${LARGE_BREAKPOINT}) {
  }


  @media (min-width: ${XLARGE_BREAKPOINT}) {

  }

  `;

  const MainBlock = styled.div``;

  return (
    <Container>
      <Head>
        <h2>
          I Like To Build Things... Check These Out
          <Link className="btn btn-dark btn-lg" to="/projects">
            Projects
          </Link>
        </h2>

        <img
          src="https://uploads-ssl.webflow.com/583c5192e11409586f8cc2e4/5c976451d784214c58919c56_building-product.svg"
          alt=""
          width="50%"
          height="50%"
        />
      </Head>
    </Container>
  );
};

export default Header;
