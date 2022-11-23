import React, {useEffect, useState} from 'react';
import NoteCard from "./NoteCard";
import {Box, Grid, Typography} from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const CardGrid = (props) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
				{props.notes.length > 0 ? (
					<Grid container spacing={3}>
						{props.notes.map(note => (
						<Grid item xs>
							<NoteCard key={note.id} note={note} deleteNote={props.deleteNote} editNote={props.editNote}/>
						</Grid>
						))}
					</Grid>
				) : (
					<div>
						<LightbulbOutlinedIcon sx={{color: "#E5E5E5", mx: "49%", mt: 10, transform: "scale(5,5)"}}/>
						<Typography sx={{color: "#727272", fontSize: 25, width: "fit-content", mx: "auto", mt: 5}}>Notes you add appear hear</Typography>
					</div>
				)}
		</Box>
	)
}

export default CardGrid;