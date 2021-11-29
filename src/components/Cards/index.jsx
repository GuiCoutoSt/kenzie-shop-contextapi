import { BiCoinStack } from "react-icons/bi";

import Button from "../Button";
import { Container, Price } from "./styles";

import axios from "axios";
import { useState } from "react";

const Cards = () => {
  const [character, setCharacter] = useState({});
  axios
    .get("https://adventure-time-api.herokuapp.com/api/v1/characters/finn")
    .then((response) => {
      setCharacter(response.data);
    });

  return (
    <Container>
      <img src={character.sprite} alt="" />
      <h3>{character.displayName}</h3>
      <Price>
        <BiCoinStack color={"#FDC60A"} size={20} />
        <span>10.000</span>
      </Price>
      <Button children={"Adicionar"} />
    </Container>
  );
};

export default Cards;
