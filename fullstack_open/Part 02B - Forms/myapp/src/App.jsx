import { useState } from 'react'
import Note from './components/Note';

function App(props) {
  const [notes, setNotes ] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (event) => {
    // event.preventDefault();
    // console.log('button clicked', event.target);
    // console.log(event.target.value);
    setNewNote(event.target.value);
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  // exercises
  const [persons, setPersons] = useState([{name: 'Arto Hellas', id: 1}]);
  // const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('a new name');

  const handleNameAdd = (event) => {
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: String(persons.length + 1),
    }
    // console.log(persons.includes(nameObject.name))
    console.log(persons.name === nameObject.name);
    console.log('Persons: ', persons.name);
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists`);      
    } else {
      setPersons(persons.concat(nameObject));
    }
    
    setNewName('');
  }

  return (
    <>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>

      <br />
      <h2>Phonebook</h2>
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.name}</li>
        )}
      </ul>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameAdd} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
        
      </form>
      

      <h2>Numbers</h2>

      
    </>
  )
}

export default App
