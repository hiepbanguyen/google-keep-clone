import React, { useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {InputBase, styled, TextField, Typography} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


const CreateNoteCard = (props) => {
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
		<Card variant="outlined" sx={{ minWidth: 275, maxWidth: 500, margin: 5, mx: "auto" }}>
			<CardContent>
				<div className="flex-row">
					<InputBase name="title" value={note.title} placeholder="Title" sx={{ width: 1, ml: 2, mb: 2, fontWeight: "bold" }} onChange={handleContentChange}/>
				</div>
				<div className="flex-row">
					<InputBase name="content" value={note.content} placeholder="Take a note..." multiline={true} sx={{ width: 1, ml: 2 }} onChange={handleContentChange}/>
				</div>
			</CardContent>
			<CardActions>
				<Button size="small" sx={{ mr: 0}} onClick={handleAddNote}>Add</Button>
			</CardActions>
		</Card>
	);
}

export default CreateNoteCard