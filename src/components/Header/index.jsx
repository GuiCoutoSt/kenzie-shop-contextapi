import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BiCart } from "react-icons/bi";
import { Container, IconContainer } from "./styles";

const Header = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <h1>
        kenzie<span>shop</span>
      </h1>
      <IconContainer>
        <Link to="/">Produtos</Link>
        <BiCart
          size={30}
          style={{ color: "#403f3e" }}
          onClick={() => history.push("/cart")}
        />
        {cart.length > 0 && (
          <span onClick={() => history.push("/cart")}>{cart.length}</span>
        )}
      </IconContainer>
    </Container>
  );
};

export default Header;
