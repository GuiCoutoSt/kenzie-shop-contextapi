import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { BiCoinStack } from "react-icons/bi";

import CartCards from "../../components/CartCards";
import Button from "../../components/Button";
import { Container, CardNest, Resume, Price, None } from "./styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const cartTotal = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -250 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {cart.length > 0 ? (
        <Container>
          <CardNest>
            {cart.map((item) => (
              <CartCards key={item.id} character={item} />
            ))}
          </CardNest>

          <Resume>
            <h2>Resumo do Pedido</h2>
            <Price>
              <span>{cart.length} Produtos</span>
              <span>
                <BiCoinStack color={"#FDC60A"} size={20} />
                {cartTotal.toFixed(2)}
              </span>
            </Price>
            <Button children={"Finalizar Compra"} />
          </Resume>
        </Container>
      ) : (
        <None>
          <h3>nenhum item selecionado :/</h3>
        </None>
      )}
    </motion.div>
  );
};

export default Cart;
