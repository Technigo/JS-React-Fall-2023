import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// using createSlice from Redux Toolkit abstracts away the need for a switch statement
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // incrementByAmount: Increments the count by a specific payload amount provided in the action.
    incrementByAmount: (state, action) => {
      // state.count = state.count + action.payload;
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
