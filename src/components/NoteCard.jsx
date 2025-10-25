import { useState } from 'react'
import './NoteCard.css'
import hollowStar from '../assets/hollow-star.svg'
import filledStar from '../assets/filled-star.svg'

function NoteCard({ noteData }) {
    return (
        <article className="note-entry">
            <h3 className="note-title">{noteData.title}</h3>
            <div className="note-preview" dangerouslySetInnerHTML={{ __html: noteData.content }}/>
            <p className="time">{noteData.date}</p>
            <div className="stars">
                {renderStars(noteData.numStars)}
            </div>
        </article>
    )
}

function renderStars(numStars) {
    const starsArray = [];

    if (numStars < 3) {
        starsArray.push(<img src={hollowStar} />);
    }

    for (let i = 0; i < numStars && i < 3; i++) {
        starsArray.push(<img src={filledStar} />);
    }

    return (
        starsArray
    )
}

export default NoteCard