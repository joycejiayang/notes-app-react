import {useState} from 'react'
import './NoteCard.css'
import StarRating from "./StarRating"

function NoteCard({noteData, onCardClick}) {
    return (
        <article key={noteData.id} className="note-entry" onClick={() => onCardClick(noteData)}>
            <h3 className="note-title">{noteData.title}</h3>
            <div className="note-preview" dangerouslySetInnerHTML={{ __html: noteData.content }}/>
            <p className="time">{noteData.date}</p>
            <StarRating numStars={noteData.numStars} />
        </article>
    )
}

export default NoteCard