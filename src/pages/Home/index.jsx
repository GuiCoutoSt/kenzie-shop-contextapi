import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import HomeCards from "../../components/HomeCards";

import Container from "./styles";

const Home = () => {
  const [products, setProducts] = useState([]);

  const prices = [2902, 3575, 938, 3371, 706, 1917, 3536, 2515, 1164, 3970];

  useEffect(() => {
    api.get("/characters").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const newArray = products.map((product, index) => {
    return {
      ...product,
      price: prices[index],
    };
  });

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 250 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Container>
        {newArray.map((product) => (
          <HomeCards
            key={product.id}
            character={product}
            price={product.price.toFixed(2)}
          />
        ))}
      </Container>
    </motion.div>
  );
};

export default Home;
