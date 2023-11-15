import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
  },
  reducers: {
    addNote: (state, action) => {
      // immutable pattern to add an element(note) to your state array
      state.items.push(action.payload);
    },
    removeNote: (state, action) => {
      // immutable pattern to remove an element(note) to your state array
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const notesList = (state) => state.notes.items;

export default notesSlice.reducer;
