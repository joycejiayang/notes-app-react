import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'

function App() {
  return (
    <>
      <main id="content">
        <h1 className="page-title">Notes</h1>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </main>
    </>
  )
}

export default App
