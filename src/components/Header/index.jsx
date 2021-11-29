import { BiCart } from "react-icons/bi";
import { Container, IconContainer } from "./styles";

const Header = () => {
  return (
    <Container>
      <h1>
        kenzie<span>shop</span>
      </h1>
      <IconContainer onClick={""}>
        <BiCart size={30} style={{ color: "#403f3e" }} />
        <span>8</span>
      </IconContainer>
    </Container>
  );
};

export default Header;
