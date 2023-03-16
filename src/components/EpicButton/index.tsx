import { Button, ButtonShadow, Container } from "./styles";

interface ButtonProps {
  text: string;
}

const EpicButton = ({ text }: ButtonProps) => {
  return (
    <Container>
      <Button>{text}</Button>
      <ButtonShadow></ButtonShadow>
    </Container>
  );
};

export default EpicButton;
