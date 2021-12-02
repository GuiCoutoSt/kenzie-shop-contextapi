import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

import { notifySuccess } from "../../utils/notifications";

import { BiCoinStack } from "react-icons/bi";

import Button from "../Button";
import { Container, Price, Info, PriceNest } from "./styles";

const CartCards = ({ character }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleClick = () => {
    removeFromCart(character.id);
    notifySuccess("item removido!");
  };

  return (
    <Container>
      <Info>
        <img src={character.sprite} alt="" />
        <h3>{character.displayName}</h3>
      </Info>
      <PriceNest>
        <Price>
          <BiCoinStack color={"#FDC60A"} size={20} />
          <span>{character.price.toFixed(2)}</span>
        </Price>
        <Button children={"Remover"} remove onClick={handleClick} />
      </PriceNest>
    </Container>
  );
};

export default CartCards;
