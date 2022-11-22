import React, { useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {ClickAwayListener, IconButton, InputBase, styled, TextField, Typography} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

const CreateNoteCard = (props) => {
	const initialState = { id: null, title: '', content: ''};
	const [ note, setNote] = useState(initialState);
	const [ showFullTitle, setShowFullTitle ] = useState(false);
	const handleContentChange = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	}
	const handleAddNote = () => {
		props.addNote(note);
		setNote(initialState);
	}

	return (
		<ClickAwayListener onClickAway={() => {setShowFullTitle(false)}}>
			<Card variant="outlined" sx={{ minWidth: 275, maxWidth: 500, mt: 13, mb: 5, mx: "auto", borderWidth: 2 }} onClick={() => {setShowFullTitle(true)}}>
				{ showFullTitle ? (
					<div>
						<CardContent>
							<div className="flex-row">
								<InputBase name="title" value={note.title} placeholder="Title" sx={{ width: 1, ml: 2, mb: 2, fontWeight: "bold" }} onChange={handleContentChange}/>
							</div>
							<div className="flex-row">
								<InputBase name="content" autoFocus={true} value={note.content} placeholder="Take a note..." multiline={true} sx={{ width: 1, ml: 2 }} onChange={handleContentChange}/>
							</div>
						</CardContent>
						<CardActions>
							<Button size="small" sx={{ mr: 1, ml: "auto", backgroundColor: "black"}} onClick={handleAddNote} variant="contained" endIcon={<AddIcon />}>Add</Button>
						</CardActions>
					</div>
				) : (
					<div className="flex-row">
						<InputBase name="content" value={note.content} placeholder="Take a note..." multiline={true} sx={{ width: 1, ml: 2 }} onChange={handleContentChange}/>
					</div>
				)}
			</Card>
		</ClickAwayListener>
	);
}

export default CreateNoteCard