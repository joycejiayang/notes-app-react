import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'
import Nav from './components/Nav'
import notesData from './data/notesData'

function App() {
  const [allNotes, setAllNotes] = useState(notesData);
  notesData.sort((a, b) => {
    return a.order - b.order;
  });

  return (
    <>
      <main id="content">
        <h1 className="page-title">Notes</h1>
        
        {allNotes.map(noteData => (
          <NoteCard key={noteData.id} noteData={noteData}/>
        ))}
      </main>
      
      <Nav />
    </>
  )
}

export default App
