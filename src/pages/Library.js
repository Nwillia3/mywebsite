import React from "react";
import book from "../images/books.png";

import styled from "styled-components";
import { Container, Wrapper } from "../common/templateStyles";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "../common/breakpoints";
import NavBar from "../components/navBar";

const Library = () => {
  const IMG = styled.img`

    height:100%
    width: 100%;
   

    @media(min-width: ${MEDIUM_BREAKPOINT}){
      
    }

  `;

  const Title = styled.h1`
    margin-top: 2.22222rem;
    padding-bottom: 1.66667rem;
    color: #5982ff;
    font-weight: 700;
    font-size: 2rem;
     @media (min-width ${MEDIUM_BREAKPOINT}) {
      font-size: 2.5rem;
    }
  `;

  const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3.11111rem 0 5.33333rem;
    margin: 0 auto;

    p {
      font-size: 1.6rem;
      color: rgba(0, 0, 0, 0.64);
    }

    @media (min-width: ${MEDIUM_BREAKPOINT}) {
      flex-direction: row;
    }
    > p {
      font-size: 1.6rem;
    }
  `;

  const BookWrapper = styled.div``;

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Wrap>
          <BookWrapper>
            <IMG src={book} />
          </BookWrapper>

          <div className="text">
            <Title>What I'm reading</Title>
            <p>
              Just a few pieces of writing that I enjoy, that I hope you might
              enjoy as well.
            </p>
            <p>
              This is a space for all of my favorite books, essays, stories,
              articles. I'm constantly updating the lists to reflect new finds.
            </p>
          </div>
        </Wrap>

        <h1> LIST COMING SOON</h1>
      </Container>
    </React.Fragment>
  );
};

export default Library;
