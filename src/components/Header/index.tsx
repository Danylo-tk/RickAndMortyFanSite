import {
  Container,
  Gradient,
  Heading,
  ImageContainer,
  LowerGradient,
} from "./styles";
import bgPhoto from "../../../public/rickAndMorty.png";
import { useScrollY } from "../../hooks/useScrollY";

const Header = () => {
  const { scrollY } = useScrollY();

  return (
    <Container>
      <Gradient></Gradient>
      <Heading>Rick and Morty</Heading>
      <ImageContainer style={{ top: `${-Math.abs(scrollY / 15) - 5}rem` }}>
        <img
          src={bgPhoto}
          alt="Rick and Morty"
          style={{ height: "100%", width: "auto" }}
        />
      </ImageContainer>
      <LowerGradient></LowerGradient>
    </Container>
  );
};

export default Header;
