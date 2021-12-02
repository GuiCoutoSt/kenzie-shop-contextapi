import { useContext } from "react";
import { CatalogueContext } from "../../Providers/catalogue";

import { motion } from "framer-motion";

import HomeCards from "../../components/HomeCards";

import Container from "./styles";

const Home = () => {
  const { pricedCatalogue } = useContext(CatalogueContext);

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 250 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Container>
        {pricedCatalogue.map((product) => (
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
