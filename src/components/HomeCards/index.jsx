import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/modules/cart/actions";

import { BiCoinStack } from "react-icons/bi";

import Button from "../Button";
import { Container, Price } from "./styles";

import { notifyError, notifySuccess } from "../../utils/notifications";

const HomeCards = ({ character, price }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (cart.some((item) => item.id === character.id)) {
      notifyError("item já adicionado!");
    } else {
      dispatch(addItem(character));
      notifySuccess("item adicionado!");
    }
  };

  return (
    <Container>
      <img src={character.sprite} alt="" />
      <h3>{character.displayName}</h3>

      <Price>
        <BiCoinStack color={"#FDC60A"} size={20} />
        <span>{price}</span>
      </Price>
      <Button children={"Adicionar"} onClick={handleClick} />
    </Container>
  );
};

export default HomeCards;
