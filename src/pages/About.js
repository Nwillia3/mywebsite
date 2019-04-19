import React from "react";
import NavBar from "../components/navBar";
import styled from "styled-components";
import { Container, Wrapper } from "../common/templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "../common/breakpoints";
import photo from "../images/photo.jpeg";

const About = () => {
  const IMG = styled.img`

    height:30%
    border-radius: 16px;
    width: 100%;
   

    @media(min-width: ${MEDIUM_BREAKPOINT}){
      width: 37%
      height:37%
    }

  `;

  const Wrap = styled.div`
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.6rem;
      color: rgba(0, 0, 0, 0.64);
    }

    @media (min-width: ${MEDIUM_BREAKPOINT}) {
      flex-direction: row;

      .text {
        flex-direction: column;
      }
    }

    > p {
      font-size: 1.6rem;
    }
  `;

  const Title = styled.h1`
    margin-top: 2.22222rem;
    padding-bottom: 1.66667rem;
    color: #5982ff;
    font-weight: 700;

    p {
      font-size: 1.556rem;
    }
  `;

  const TitleSkill = styled.h2`
    margin-top: 2.22222rem;
    padding-bottom: 1.66667rem;
    color: #5982ff;
    font-weight: 700;
  `;

  const Skills = styled.h3`
    display: inline-block;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16),
      0 0 2px rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1), 0 0 2px rgba(0, 0, 0, 0.08);
    -webkit-transition: all 150ms ease-in-out;
    -o-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    background: #fff;
    padding: 8px;
    margin: 8px;
    border-radius: 16px;
  `;

  const Section = styled.div`
    width: 100%;

    display: inline-block;

    @media (min-width: ${MEDIUM_BREAKPOINT}) {
      width: 50%;
    }
  `;

  const ParaOne = styled.p`
    font-size: 1.55556rem;
  `;

  const ParaTwo = styled.p`
    font-size: 1.55556rem;
  `;

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Wrap>
          <IMG src={photo} />

          <div className="text">
            <Title>A little about me</Title>
            <p>I'm a FullStack Engineer born and raised from Brooklyn.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </Wrap>
      </Container>

      <Wrapper>
        <Container>
          <Title> Interest</Title>
          <ParaOne>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </ParaOne>
          <ParaOne style={{ paddingBottom: "40px" }}>
            I'm always happy to chat
          </ParaOne>
        </Container>
      </Wrapper>
      <Container>
        <Title> Skills </Title>
        <Section>
          <TitleSkill> Frontend</TitleSkill>
          <Skills> Gatsby </Skills>
          <Skills>React </Skills>
          <Skills>WebPack </Skills>
        </Section>

        <Section>
          <TitleSkill> Backend</TitleSkill>
          <Skills>Express </Skills>
          <Skills>NodeJs </Skills>
          <Skills>NextJs </Skills>
        </Section>

        <Section>
          <TitleSkill> Databases</TitleSkill>
          <Skills>MongoDB </Skills>
          <Skills>PostGres </Skills>
        </Section>

        <Section>
          <TitleSkill> Other </TitleSkill>
          <Skills>Jira </Skills>
          <Skills>Git </Skills>
          <Skills>Tableau </Skills>
          <Skills>Postman </Skills>
        </Section>
      </Container>

      {/* <img src={photo} alt="image" width="200px" /> */}
    </React.Fragment>
  );
};

export default About;
