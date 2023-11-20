import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, notesList, removeNote } from "../reducers/noteSlice";

export const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(notesList);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      dispatch(addNote({ id: Date.now(), text: newNote }));
      setNewNote("");
    }
  };

  const handleRemoveNote = (id) => {
    dispatch(removeNote(id));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddNote();
    }
  };

  return (
    <div className="appContainer">
      <div className="section">
        <h1>Write your notes</h1>
        <ul className="notesList">
          {notes.map((note) => (
            <li key={note.id} className="noteItem">
              {note.text}
              <button
                className="removeButton"
                onClick={() => handleRemoveNote(note.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="addButton" onClick={handleAddNote}>
          Add
        </button>
      </div>
    </div>
  );
};
