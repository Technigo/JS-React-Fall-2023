// create your store here
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/noteSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
