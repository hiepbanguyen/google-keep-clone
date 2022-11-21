import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

const NoteCard = (props) => {
	return (
		<Card variant="outlined" sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{fontWeight: "bold"}}>
					{props.note.title}
				</Typography>
				<Typography sx={{ margin: "auto" }} color="text.secondary">
					{props.note.content}
				</Typography>
			</CardContent>
		</Card>
	);
}
export default NoteCard;