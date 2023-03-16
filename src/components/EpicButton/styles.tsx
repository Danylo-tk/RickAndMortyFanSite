import palette from "../../styles/palette";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const Button = styled.div`
  height: 4rem;
  width: 10rem;
  text-align: center;
  line-height: 4rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 5rem;
  color: ${palette.bumblebee};
  background: linear-gradient(-45deg, #338aff, #ff3d77, #ff6a00);
  background-size: 600%;
  animation: ${gradientAnimation} 8s linear infinite;
`;

const ButtonShadow = styled(Button)`
  z-index: -1;
  margin-top: 1rem;
  position: absolute;
  opacity: 0.8;
  filter: blur(1rem);
`;

export { Container, Button, ButtonShadow };
