import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  margin-bottom: 8rem;
  width: 100%;
  height: 35rem;
  overflow: hidden;
  position: relative;
  background-color: ${palette.bumblebee};
`;

const ImageContainer = styled.div`
  height: 80rem;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
`;

const Gradient = styled.div`
  height: 6rem;
  width: 100%;
  z-index: 1;
  position: absolute;
  background: linear-gradient(180deg, #fce22a 0%, rgba(252, 226, 42, 0) 100%);
`;

const LowerGradient = styled.div`
  bottom: 0;
  height: 6rem;
  width: 100%;
  position: absolute;
  background: linear-gradient(0deg, #fce22a 0%, rgba(252, 226, 42, 0) 100%);
`;

const Heading = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19rem;
  color: ${palette.bgColor};

  @media (max-width: 80rem) {
    font-size: 12rem;
  }

  @media (max-width: 55rem) {
    font-size: 8rem;
  }
`;

export { Container, Heading, ImageContainer, Gradient, LowerGradient };
