import React, { useState } from 'react'

const AddNote = (props) => {
	const initialState = { id: null, title: '', content: ''};
	const [ note, setNote] = useState(initialState);
	const handleContentChange = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	}
	const handleAddNote = () => {
		props.addNote(note);
		setNote(initialState);
	}

	return (
		<div className="card-content">
			<input name="title" placeholder={"Title"} value={note.title} onChange={handleContentChange}></input>
			<textarea name="content" placeholder={"Take a note..."} value={note.content} onChange={handleContentChange}></textarea>
			<button
				className="button muted-button"
				onClick={handleAddNote}
			>
				Add
			</button>
		</div>
	)
}

export default AddNote