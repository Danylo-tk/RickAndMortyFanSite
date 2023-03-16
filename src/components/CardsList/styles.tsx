import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  gap: 2rem;
  margin: auto;
  display: grid;
  max-width: 184rem;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 118rem) {
    max-width: 122rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 78rem) {
    max-width: 60rem;
    grid-template-columns: 1fr;
  }
`;

const PaginationLarge = styled.div`
  .container {
    gap: 1rem;
    margin: 3rem 0;
    height: 4rem;
    line-height: 4rem;
    display: flex;
    justify-content: center;
    list-style: none;
    font-size: 2rem;
  }

  @media (max-width: 40rem) {
    .container {
      display: none;
    }
  }

  .page {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    color: ${palette.bgColor};
    background-color: #fff;
  }

  .link {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .activePage {
    background-color: ${palette.bumblebee};
  }

  .navigationBtn {
    width: 10rem;
    border-radius: 1rem;
    color: ${palette.bgColor};
    background-color: ${palette.bumblebee};
  }

  .navigationBtnLink {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .page:hover,
  .navigationBtn:hover {
    opacity: 0.8;
  }
`;

const PaginationSmall = styled(PaginationLarge)`
  @media (max-width: 40rem) {
    .container {
      display: flex;
    }
  }

  @media (min-width: 40rem) {
    .container {
      display: none;
    }
  }

  .container {
    gap: 0.5rem;
    font-size: 1.4rem;
  }

  .navigationBtn {
    width: 7rem;
  }
`;

export { Container, PaginationLarge, PaginationSmall };
