import React, {useEffect, useState} from 'react'

const NoteList = (props) => {
	return (
		<div>
			{props.notes.length > 0 ? (
				props.notes.map(note => (
					<div key={note.id} className="flex-small">
						<span>{note.title}</span>
						<p>{note.content}</p>
						<button
							className="button muted-button"
							onClick={() => props.deleteNote(note.id)}
						>
							Delete
						</button>
					</div>
				))
			) : (
				<div aria-colspan={3}>No notes</div>
			)
			}
		</div>
	)
}

export default NoteList