import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import NoteDialog from "./NoteDialog";

const NoteCard = (props) => {
	const [editing, setEditing] = useState(false);

	const handleCardClicked = () => {
		setEditing(true);
	}

	const handleCardClosed = () => {
		setEditing(false);
	}

	return (
		<div>
			{editing ? (
				<NoteDialog key={props.key} note={props.note} editNote={props.editNote} deleteNote={props.deleteNote} setEditing={handleCardClosed}/>
			) : (<span></span>)}
			<Card variant="outlined" sx={{ minWidth: 200, borderWidth: 2 }} onClick={handleCardClicked}>
				<CardContent>
					<Typography sx={{fontWeight: "bold"}}>
						{props.note.title}
					</Typography>
					<Typography sx={{ margin: "auto", color: "black", fontSize: "15px" }} color="text.secondary">
						{props.note.content}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
export default NoteCard;