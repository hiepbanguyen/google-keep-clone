import React, {useEffect, useState} from "react";
import CreateNoteCard from "./components/CreateNoteCard";
import CardGrid from "./components/CardGrid";
import PrimarySearchAppBar from "./components/AppBar.js";

function App() {
  const data = JSON.parse(localStorage.getItem('notes'));
  const [notes, setNotes] = useState(data ?? []);

  const addNote = (note) => {
    const largestNoteId = Number(localStorage.getItem('largestNoteId'));
    // console.log(JSON.stringify(largestNoteId));
    const newNote = { ...note, id: largestNoteId + 1};
    // console.log(JSON.stringify(newNote));
    localStorage.setItem('largestNoteId', newNote.id);
    const newNotes = [...notes, newNote];
    updateStateAndLocalStorage(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    updateStateAndLocalStorage(newNotes);
  }

  const editNote = (id, editedNote) => {
    const newNotes = notes.map((note) => (note.id === id ? editedNote : note));
    updateStateAndLocalStorage(newNotes);
  }

  const updateStateAndLocalStorage = (newNotes) => {
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
  }

  const searchNotes = (keyword) => {
    if (keyword.length > 0) {

      const notesContainKeyword = [];
      for (const i of data) {
        const pool = i.content.concat(i.title).toLowerCase();
        if (pool.includes(keyword.toLowerCase())) {
          notesContainKeyword.push(i);
        }
      }
      setNotes(notesContainKeyword);
    }
  }

  return (
      <div className="container">
        <PrimarySearchAppBar searchNotes={searchNotes}/>
        <CreateNoteCard addNote={addNote}/>
        <div className="flex-row">
          <CardGrid notes={notes} deleteNote={deleteNote} editNote={editNote}/>
        </div>
      </div>
  );
}


export default App;
