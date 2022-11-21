import React, {useState} from "react";
import CreateNoteCard from "./components/CreateNoteCard";
import CardGrid from "./components/CardGrid";

function App() {
  const data = [
    { id: 1, title: 'Note1', content: 'floppydiskfette' },
    { id: 2, title: 'Note2', content: 'siliconeffsidolon' },
    { id: 3, title: 'Note3', content: 'benisfwefwefphere' },
    { id: 4, title: 'Note3', content: 'benisfwefwefphere' },
    { id: 5, title: 'Note3', content: 'benisfwefwefphere' },
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
  // const editUser = (id, editedUser) => {
  //   setEditing(false);
  //   setNotes(notes.map((user) => (user.id === id ? editedUser : user)))
  // }
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
        <CreateNoteCard addNote={addNote}/>
        <div className="flex-row">
          <CardGrid notes={notes} deleteNote={deleteNote}/>
        </div>
      </div>
  );
}


export default App;
