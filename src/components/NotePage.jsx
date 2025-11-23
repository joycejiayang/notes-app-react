import {useState} from 'react';
import './NotePage.css';

function NotePage({onBackClick}) {
    return (
        <section id="note-page">
            <div className="note-page-header">
                <button className="back-btn" onClick={onBackClick}>&#8592; Back</button>
            </div>
        </section>
    )
}

export default NotePage