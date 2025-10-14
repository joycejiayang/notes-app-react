import { useState } from 'react'
import './NoteCard.css'
import hollowStar from '../assets/hollow-star.svg'
import filledStar from '../assets/filled-star.svg'

function NoteCard({ note }) {
    return (
        <article className="note-entry">
            <h3 className="note-title">{note.title}</h3>
            <div className="stars">
                <img src={hollowStar} />
                <img src={filledStar} />
                <img src={filledStar} />
            </div>
            <div className="note-preview" dangerouslySetInnerHTML={{ __html: note.content }}/>
            <p className="time">{note.date}</p>
        </article>
    )
}

export default NoteCard