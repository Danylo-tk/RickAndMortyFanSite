import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.div`
  width: 70rem;
  height: 5rem;
`;

const SearchField = styled.input`
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.1);

  :focus {
    outline: none;
  }
`;

export { Container, SearchBar, SearchField };
