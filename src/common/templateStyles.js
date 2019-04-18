import styled from "styled-components";
import {
  SMALL_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  LARGE_BREAKPOINT,
  XLARGE_BREAKPOINT
} from "../common/breakpoints";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: ${SMALL_BREAKPOINT}) {
    max-width: 540px;
  }

  @media (max-width: ${MEDIUM_BREAKPOINT}) {
    max-width: 720px;
  }

  @media (min-width: ${LARGE_BREAKPOINT}) {
    max-width: 992px;
  }

  @media (min-width: ${XLARGE_BREAKPOINT}) {
    max-width: 1140px;
  }
`;

const Wrapper = styled.div`
  background: #f9faff;
`;

export { Container, Wrapper };
