import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../common/templateStyles";

import { MEDIUM_BREAKPOINT, LARGE_BREAKPOINT } from "../common/breakpoints";

const More = () => {
  const Title = styled.h2`
    text-align: left;

    font-family: adobe-caslon-pro, serif;
    color: #5982ff;
    font-weight: 700;
    line-height: 1;
    margin: 5px 3px;
    padding: 10px;
    font-size: 2.8rem;

    @media (min-width: ${MEDIUM_BREAKPOINT}) {
    }
  `;

  const Text = styled.div`
    margin: 5px 3px;
    padding: 10px;
    color: rgba(0, 0, 0, 0.64);
  `;

  return (
    <Container>
      <Title> More </Title>
      <Text>
        <p>
          Besides living my life tethered to screens and slowly succumbing to
          the harsh bite of fluorescent lights, I also spend some of my time
          with books. If you're interested, here's a peek at
          <span> what I'm reading. </span>
          <br />
          <br />
          For more about me, view my <Link to="/about">about page, </Link>
          and for the TLDR version, there's my <span> resume / CV. </span>
          <br />
          <br />
          For everything else, you can reach me at{" "}
          <a href="mailtoNeil.Wlliams227@gmail.com:">
            Neil.Wlliams227@gmail.com
          </a>
          .
        </p>
      </Text>
    </Container>
  );
};

export default More;
