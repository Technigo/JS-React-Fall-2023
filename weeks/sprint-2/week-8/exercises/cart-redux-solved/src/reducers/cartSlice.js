import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

/* removeItems()
Here's what each part does:

state.items
This refers to the items property in the Redux state. It's assumed that items is an array.

.filter()
This is an array method in JavaScript. 
It creates a new array with all elements that pass the test implemented by the provided function.

(item) => item.id !== action.payload.id
This is the filtering function. 
It checks if the id of each item in the items array is not equal to the id of the item specified in the action.payload.

So, the overall effect of this code is to create a new array of items where the item with the specified id in the action.payload is excluded. 
In other words, it removes an item from the items array based on its id. 
The Redux state is then updated with this new array.

This is a common pattern in Redux reducers when you want to update an array in the state by removing an item based on some criteria. 
The immutability of state in Redux is maintained, as a new array is created rather than modifying the existing one in place. */
