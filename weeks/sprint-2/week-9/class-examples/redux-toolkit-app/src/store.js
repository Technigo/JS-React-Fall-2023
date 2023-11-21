import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart/cartSlice";
import modalReducer from "./reducers/modal/modalSlice";

const reducer = combineReducers({
  modal: modalReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: reducer,
});
