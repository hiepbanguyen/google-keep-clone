import React, {useState} from "react";
import CreateNoteCard from "./components/CreateNoteCard";
import CardGrid from "./components/CardGrid";
import AppBar from "./components/AppBar.js";

function App() {
  const data = [
    { id: 1, title: 'Title 1 Example', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, title: 'Title 2 Example', content: 'Lorem ipsum dolo commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 3, title: 'Title 3 Example', content: 'Lorem ipsum dolo commodo consequat. Duis aute irure dolor.' },
  ]
  const [notes, setNotes] = useState(data);

  const addNote = (note) => {
    note.id = notes.length + 1;
    setNotes(notes.concat(note));
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }
  //
  const editNote = (id, editedNote) => {
    // setEditing(false);
    setNotes(notes.map((note) => (note.id === id ? editedNote : note)))
  }
  //
  // const [editing, setEditing] = useState(false)
  // const initialCurrentUser = { id: null, name: '', username: '' }
  // const [currentUser, setCurrentUser] = useState(initialCurrentUser)
  //
  // const editRow = (user) => {
  //   setEditing(true)
  //   setCurrentUser({ id: user.id, name: user.name, username: user.username })
  // }

  return (
      <div className="container">
        <AppBar />
        <CreateNoteCard addNote={addNote}/>
        <div className="flex-row">
          <CardGrid notes={notes} deleteNote={deleteNote} editNote={editNote}/>
        </div>
      </div>
  );
}


export default App;
