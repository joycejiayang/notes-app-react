import { useState } from 'react'
import './NoteCard.css'
import hollowStar from '../assets/hollow-star.svg'
import filledStar from '../assets/filled-star.svg'


function NoteCard() {
    return (
        <article className="note-entry">
            <h3 className="note-title">Random Thoughts that Keep Me Up at Night</h3>
            <div className="stars">
                <img src={hollowStar} />
                <img src={filledStar} />
                <img src={filledStar} />
            </div>
            <div className="note-preview">
                <ol>
                    <li>Why does "phonetically" not sound how it's spelled?</li>
                    <li>What if socks with sandals are just ahead of their time?</li>
                </ol>
            </div>
            <p className="time">Oct 24, 2024</p>
        </article>
    )
}

export default NoteCard