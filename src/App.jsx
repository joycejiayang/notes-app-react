import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'
import Nav from './components/Nav'
import notesData from './data/notesData'

function App() {
  const [allNotes, setAllNotes] = useState(notesData);

  return (
    <>
      <main id="content">
        <h1 className="page-title">Notes</h1>
        
        {allNotes.map(note => (
          <NoteCard key={note.id} note={note}/>
        ))}
      </main>
      
      <Nav />
    </>
  )
}

export default App
