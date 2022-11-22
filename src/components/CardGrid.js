import React, {useEffect, useState} from 'react';
import NoteCard from "./NoteCard";
import {Box, Grid} from "@mui/material";

const CardGrid = (props) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				{props.notes.length > 0 ? (
					props.notes.map(note => (
						<Grid item xs>
							<NoteCard key={note.id} note={note} deleteNote={props.deleteNote} editNote={props.editNote}/>
						</Grid>
						// <div key={note.id} className="flex-small">
						// 	<span>{note.title}</span>
						// 	<p>{note.content}</p>
						// 	<button
						// 		className="button muted-button"
						// 		onClick={() => props.deleteNote(note.id)}
						// 	>
						// 		Delete
						// 	</button>
						// </div>
					))
				) : (
					<div></div>
				)}
			</Grid>
		</Box>
	)
}

export default CardGrid;