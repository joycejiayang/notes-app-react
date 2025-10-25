import { useState } from 'react'
import './NoteCard.css'
import StarRating from "./StarRating"

function NoteCard({ noteData, onStarRatingChange }) {
    const handleStarRatingChange = (newStarCount) => {
        onStarRatingChange(noteData.id, newStarCount)
    }

    return (
        <article className="note-entry">
            <h3 className="note-title">{ noteData.title }</h3>
            <div className="note-preview" dangerouslySetInnerHTML={{ __html: noteData.content }}/>
            <p className="time">{ noteData.date }</p>
            <StarRating 
                numStars={ noteData.numStars }
                onNumStarChange={ (newStarCount) => handleStarRatingChange(newStarCount) }
            />
        </article>
    )
}

export default NoteCard