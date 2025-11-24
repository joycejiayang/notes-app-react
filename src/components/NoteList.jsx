import {useState} from 'react'
import NoteCard from './NoteCard.jsx'
import './styles/NoteList.css'

function NoteList({allNotes, onNoteOpen}) {
    return (
        <main className="notes-list">
          {allNotes.map(noteData => (
            <NoteCard 
              key={noteData.id} 
              noteData={noteData}
              onCardClick={() => onNoteOpen(noteData)}
            />
          ))}
      </main>
    )
}

export default NoteList