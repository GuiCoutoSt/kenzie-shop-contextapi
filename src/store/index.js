import { createStore, combineReducers } from "redux";

import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers);

export default store;
