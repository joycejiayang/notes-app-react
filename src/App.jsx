import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Keyboard from './components/Keyboard'
import notesData from './data/notesData'
import leftCorner from './assets/left-corner.png'
import rightCorner from './assets/right-corner.png'

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

  /* Filter notes by search query */
  function searchNotes(query) {
    const filteredNotes = sortedNotes.filter(noteData => {
      const trimmedQuery = query.toLowerCase().trim();
      return noteData.title.toLowerCase().includes(trimmedQuery) || noteData.content.toLowerCase().includes(trimmedQuery)
    });
    setAllNotes(filteredNotes);
  }

  /* Pull up keyboard if input area tapped */
  function showKeyboard() {
    const keyboard = document.getElementById("keyboard");
    const screenOverlay = document.getElementById("screen-overlay");

    screenOverlay.style.display = "block";
    keyboard.style.transform = "translateY(0)";
  }

  function hideKeyboard() {
    const keyboard = document.getElementById("keyboard");
    const screenOverlay = document.getElementById("screen-overlay");

    screenOverlay.style.display = "none";
    keyboard.style.transform = "translateY(100%)";
  }

  /* Setting up the phone width/height dimensions for iPhone Safari browser */
  function setWidthHeight() {
    const vw100 = window.innerWidth;
    document.documentElement.style.setProperty('--vw100', `${vw100}px`);
    const vh100 = window.innerHeight;
    document.documentElement.style.setProperty('--vh100', `${vh100}px`);
  }

  setWidthHeight();
  window.addEventListener('resize', setWidthHeight);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      <header className="header">
        <h1 className="page-title">Notes</h1>
        <SearchBar onSearch={(query) => searchNotes(query)} onSearchBarClick={ showKeyboard }/>
        <div className="corner-coverings" aria-hidden="true">
          <img src={leftCorner} className="corner"/>
          <img src={rightCorner} className="corner"/>
        </div>
        <div id="screen-overlay" onClick={ hideKeyboard }></div>
      </header>

      <main className="notes-list">
          {allNotes.map(noteData => (
            <NoteCard 
              key={ noteData.id } 
              noteData={ noteData }
              onStarRatingChange={ (newStarCount) => updateNumStars( noteData.id, newStarCount ) }
            />
          ))}
      </main>
      
      <Nav />

      <Keyboard />
    </>
  )
}

export default App
