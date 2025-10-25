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
                {setStars(noteData.numStars)}
            </div>
        </article>
    )
}

function setStars(num) {
    if (num === 1) {
        return (
        <>
            <img src={hollowStar} />
            <img src={filledStar} />
        </>
        )
    } else if (num === 2) {
        return (
        <>
            <img src={hollowStar} />
            <img src={filledStar} />
            <img src={filledStar} />
        </>
        )
    } else if (num === 3) {
        return (
        <>
            <img src={filledStar} />
            <img src={filledStar} />
            <img src={filledStar} />
        </>
        )
    } else {
        return <img src={hollowStar} />;
    }
}

export default NoteCard