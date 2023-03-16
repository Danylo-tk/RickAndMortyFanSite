import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  margin: auto;
  position: relative;
  max-width: 122rem;
  display: flex;
  justify-content: center;
`;

const FilterHeader = styled.span`
  font-size: 10rem;
  font-weight: bold;
  letter-spacing: 2rem;
  text-transform: uppercase;
  opacity: 0.2;
`;

const FilterList = styled.ul`
  gap: 1rem;
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;
  font-size: 3rem;
  list-style: none;
`;

interface ItemProps {
  isActive?: boolean;
}

const FilterItem = styled.li<ItemProps>`
  padding: 0.5rem 2rem;
  font-size: 3rem;
  font-weight: 600;
  color: ${palette.bumblebee};
  border-radius: 1rem;
  border: 0.2rem solid ${palette.bumblebee};
  cursor: pointer;

  :hover {
    color: ${palette.bgColor};
    background-color: ${palette.bumblebee};
  }

  ${({ isActive }) =>
    isActive &&
    `
      color: ${palette.bgColor};
      background: white;

      :hover{
        color: ${palette.bumblebee};
        background: white;
      }
  `}
`;

export { Container, FilterHeader, FilterList, FilterItem };
