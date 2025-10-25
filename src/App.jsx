import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'
import Nav from './components/Nav'
import notesData from './data/notesData'

function App() {
  const sortedNotes = [...notesData].sort((a, b) => {
    return a.order - b.order;
  })

  const [allNotes, setAllNotes] = useState(sortedNotes || []);

  const updateNumStars = (noteDataId, newStarCount) => {
    // setAllNotes(prev => {
    //   // find index of the note to update
    //   const index = prev.findIndex(note => note.id === noteDataId);

    //   // do nothing if index doesn't exist
    //   if (index === -1) {
    //     return prev;
    //   }

    //   // update note to be changed
    //   const updatedNotes = [...prev];
    //   updatedNotes[index] = { ...updatedNotes[index], numStars: newStarCount };
    //   return updatedNotes;
    // })
    setAllNotes(prev => {
      return prev;
    })
  }

  return (
    <>
      <main id="content">
        <h1 className="page-title">Notes</h1>
        
        {allNotes.map(noteData => (
          <NoteCard 
            key={ noteData.id } 
            noteData={ noteData }
            onStarRatingChange={ (newStarCount) => updateNumStars( noteData.id, newStarCount ) }
          />
        ))}
      </main>
      
      <Nav />
    </>
  )
}

export default App
