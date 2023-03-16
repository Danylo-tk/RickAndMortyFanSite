import {
  CardContent,
  Container,
  ContentBlock,
  ImgContainer,
  SubTitle,
  Text,
  Title,
} from "./styles";

interface CardProps {
  image: string;
  name: string;
  status: string;
  location: string;
}

const Card = ({ image, name, status, location }: CardProps) => {
  return (
    <Container>
      <ImgContainer>
        <img
          src={image}
          alt="photo"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </ImgContainer>
      <CardContent>
        <ContentBlock>
          <Title>{name}</Title>
          <Text>{status}</Text>
        </ContentBlock>
        <ContentBlock>
          <SubTitle>Last known location:</SubTitle>
          <Text>{location}</Text>
        </ContentBlock>
        <ContentBlock>
          <SubTitle>First seen in:</SubTitle>
          <Text>episode</Text>
        </ContentBlock>
      </CardContent>
    </Container>
  );
};

export default Card;
