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
    height: 75vh
    justify-content: center
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    >img {
      width: 100%
      height: 67%
    }


  @media (max-width: ${SMALL_BREAKPOINT}) {
    flex-direction: column
    height: 100vh;

    > h2 {
      font-size: 55px
    }

  } 

    
  @media (max-width: ${MEDIUM_BREAKPOINT}) {
    flex-direction: column
  }
     
  @media (min-width: ${MEDIUM_BREAKPOINT}) {
    margin-top: 50px;


    > h2 {
      font-size: 75px
    }

  }



  @media (min-width: ${LARGE_BREAKPOINT}) {

    > h2 {
      font-size: 90px
    }
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
        />
      </Head>
    </Container>
  );
};

export default Header;
