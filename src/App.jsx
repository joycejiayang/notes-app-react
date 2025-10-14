import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'
import Nav from './components/Nav'

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
      
      <Nav />
    </>
  )
}

export default App
