import {useState} from 'react';
import StarRating from './StarRating.jsx';
import './NotePage.css';

function NotePage({noteData, onBackClick}) {
    return (
        <section id="note-page">
            <div className="note-page-header">
                <button className="back-btn" onClick={onBackClick}>&#8592; Back</button>
                {/* <StarRating numStars={noteData.numStars} onNumStarChange={onNumStarChange} parentContainer={"note-editor"}/> */}
            </div>
            <h2>{noteData.title}</h2>
            <time>{noteData.date}</time>
            <div className="note-content" dangerouslySetInnerHTML={{__html: noteData.content}}></div>
        </section>
    )
}

export default NotePage