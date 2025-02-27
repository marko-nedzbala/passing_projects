import { useState, useEffect } from 'react'
import axios from 'axios';
import Note from './components/Note';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data);
      })
  };

  // useEffect(hook, []);

  const hook2 = () => {
    axios
      .get('https://localhost:3001/numbers')
      .then(response => {
        setNotes(response.data);
      });
  }
  useEffect(hook2, []);

  console.log('render', notes.length, 'notes');
  

  return (
    <>
      
    </>
  )
}

export default App
