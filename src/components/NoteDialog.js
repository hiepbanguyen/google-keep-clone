import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {InputBase} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteDialog(props) {
	const [open, setOpen] = React.useState(true);
	const [ note, setNote] = useState(props.note);
	const handleContentChange = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	}

	const handleSave = () => {
		props.editNote(note.id, note);
		props.setEditing();
		setOpen(false);
	};

	const handleDelete = () => {
		props.deleteNote(note.id);
	}

	return (
		<React.Fragment>
			<Dialog
				fullWidth={true}
				maxWidth={'sm'}
				open={open}
				onClose={handleSave}
			>
				<DialogTitle>
					<InputBase name="title" value={note.title} defaultValue={props.note.title} sx={{ width: 1, fontWeight: "bold", fontSize: 20 }} onChange={handleContentChange}/>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<InputBase name="content" value={note.content} defaultValue={props.note.content} multiline={true} sx={{ width: 1 }} onChange={handleContentChange}/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button size="small" sx={{ mr: 1, ml: "auto", backgroundColor: "#D23F3F"}} onClick={handleDelete} variant="contained" endIcon={<DeleteIcon />}>Delete</Button>
					<Button size="small" sx={{ mr: 1, ml: "auto", backgroundColor: "black"}} onClick={handleSave} variant="contained" endIcon={<SaveIcon />}>Save</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}