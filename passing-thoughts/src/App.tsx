import { useState, useEffect } from 'react'
import './App.css'
import { AddThoughtForm } from './components/Add-Thought-Form';
import  { generateId, getNewExpirationTime }  from './utill/Utilities';
import { Thought } from './components/Thought';
import { ThoughtModel } from './model/ThoughtModel';

function App() {

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },

  ]);

  const addThought = (newThought: ThoughtModel) => {
    setThoughts(prevThoughts => [...prevThoughts, newThought])
  }

  const removeThought = (id: number) => {
    setThoughts(thoughts => 
      thoughts.filter(thought => thought.id !== id)
    )
  }

  return (
    <>
      <div className="AddThoughtForm">
        <h1>Passing Thoughts</h1>
        <AddThoughtForm addThought={addThought}/>
        <ul className='thoughts'>
          {
            thoughts.map((thought) => (
              <Thought thought={thought} removeThought={removeThought}/>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
