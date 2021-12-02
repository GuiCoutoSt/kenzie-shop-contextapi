import { createContext, useEffect, useState } from "react";

import { api } from "../../services/api";

export const CatalogueContext = createContext();

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);

  const getCharacters = () => {
    api.get("/characters").then((response) => setCatalogue(response.data));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const prices = [2902, 3575, 938, 3371, 706, 1917, 3536, 2515, 1164, 3970];

  const pricedCatalogue = catalogue.map((item, index) => {
    return {
      ...item,
      price: prices[index],
    };
  });

  return (
    <CatalogueContext.Provider value={{ pricedCatalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
