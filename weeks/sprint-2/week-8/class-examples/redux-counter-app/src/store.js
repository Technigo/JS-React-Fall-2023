import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";

const store = configureStore({
  reducer: {
    // name your reducer `counterReducer` like you want
    counter: counterReducer,
  },
});

export default store;
