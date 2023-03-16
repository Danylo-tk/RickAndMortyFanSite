import palette from "../../styles/palette";
import styled from "styled-components";

const Container = styled.div`
  height: 8rem;
  background-color: ${palette.bumblebee};
`;

const Wrapper = styled.div`
  padding: 1rem 4rem;
  margin: auto;
  max-width: 184rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 40rem) {
    padding: 1rem 2rem;
  }
`;

const Menu = styled.ul`
  gap: 4rem;
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${palette.bgColor};
`;

export { Container, Wrapper, Menu, MenuItem };
