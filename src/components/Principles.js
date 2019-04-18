import React from "react";
import "../styles/principles.css";
import "../styles/projectTitle.css";
import styled from "styled-components";
import { Container } from "../common/templateStyles";
import { MEDIUM_BREAKPOINT } from "../common/breakpoints";

const Principles = () => {
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

  const Principle = styled.div`
    display: flex;
    padding: 10px;
    margin: 0 3px;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.64);

    > h3 {
      color: #5982ff;
    }

    @media (min-width: ${MEDIUM_BREAKPOINT}) {
    }
  `;

  const Spacing = styled.div`
    margin-top: 20px
    margin-bottom: 20px
    padding-top:20px;
    padding-bottom: 20px;
  `;

  return (
    <Spacing>
      <Container>
        <Title> The Principles I Stand By</Title>

        <div className="here">
          <Principle>
            <h3>Results Focused</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </Principle>
          <Principle>
            <h3> Open Minded</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </Principle>

          <Principle>
            <h3>Adaptable Approach</h3>
            <p>
              I like to work in a fast-moving and unpredictable environment. I’m
              flexible enough to deal with those changes and still meet
              deadlines.
            </p>
          </Principle>

          <Principle>
            <h3>Forward Thinking</h3>
            <p>
              I use a simple, clear approach to building product. I can provide
              ideas, recommendations, and advice to help you achieve that.
            </p>
          </Principle>
        </div>
      </Container>
    </Spacing>
  );
};

export default Principles;
