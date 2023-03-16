import { Container, Menu, MenuItem, Wrapper } from "./styles";
import logo from "../../../public/rickHead.png";
import EpicButton from "../EpicButton";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src={logo}
          alt="Rick"
          style={{
            height: "5rem",
            width: "auto",
          }}
        />

        <Menu>
          <MenuItem>About</MenuItem>
          <MenuItem>Links</MenuItem>
          <MenuItem>
            <EpicButton text="smth cool" />
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
