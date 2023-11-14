import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";


// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
const reducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({ reducer: reducer });
