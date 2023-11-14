import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
const reducer = combineReducers({
   // name your reducer `counterReducer` like you want
  counter: counterReducer,
});

export const store = configureStore({
  reducer: reducer,
});
