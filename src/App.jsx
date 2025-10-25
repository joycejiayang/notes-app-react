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

  /* Updates numStar for a note when the note's star rating changes in StarRating
   * Do not re-render the notes or else it will cause flickering */
  const updateNumStars = (noteDataId, newStarCount) => {
    allNotes.forEach(noteData => {
      if (noteData.id === noteDataId) {
        noteData.numStars = newStarCount;
        return;
      }
    });
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
