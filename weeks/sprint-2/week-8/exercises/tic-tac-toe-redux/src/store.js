import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { game } from "./reducers/game";

const reducer = combineReducers({
  game: game.reducer,
});

export const store = configureStore({
  reducer,
});
