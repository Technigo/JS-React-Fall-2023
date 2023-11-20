import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    removeNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const notesList = (state) => state.notes.items;

export default notesSlice.reducer;
