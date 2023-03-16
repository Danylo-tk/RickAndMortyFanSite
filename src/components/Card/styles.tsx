import palette from "../../styles/palette";
import styled from "styled-components";

const Container = styled.div`
  height: 22rem;
  width: 60rem;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: ${palette.bgCard};

  @media (max-width: 40rem) {
    height: 100%;
    width: 30rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 22rem;
  overflow: hidden;
  border-radius: 1rem 0 0 1rem;

  @media (max-width: 40rem) {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentBlock = styled.div`
  gap: 0.5rem;
  display: grid;
`;

const Title = styled.h1`
  font-size: 2.8rem;
`;

const SubTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: normal;
  color: ${palette.ghostGray};
`;

const Text = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
`;

export {
  Container,
  ImgContainer,
  CardContent,
  ContentBlock,
  Title,
  SubTitle,
  Text,
};
