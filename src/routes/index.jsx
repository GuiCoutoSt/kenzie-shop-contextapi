import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
