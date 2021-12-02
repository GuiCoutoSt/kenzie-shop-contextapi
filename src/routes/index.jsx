import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
