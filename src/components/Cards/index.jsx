import { BiCoinStack } from "react-icons/bi";

import Button from "../Button";
import { Container, Price } from "./styles";

const Cards = ({ character }) => {
  return (
    <Container>
      <img src={character.sprite} alt="" />
      <h3>{character.displayName}</h3>
      <Price>
        <BiCoinStack color={"#FDC60A"} size={20} />
        <span>character.price</span>
      </Price>
      <Button children={"Adicionar"} />
    </Container>
  );
};

export default Cards;
