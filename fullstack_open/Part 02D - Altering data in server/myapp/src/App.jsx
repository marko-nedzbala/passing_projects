import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
   noteService.getAll().then(initialNotes => {
    setNotes(initialNotes);
   });
  }, []);

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);



  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };
    noteService.update(id, changedNote).then(returnedNote => { setNotes(notes.map(note => note.id === id ? returnedNote : note))});
  }


  const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'make not important' : 'make important'

    return (
      <li>
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }


  const [objs, setObjs] = useState([]);
  const [newObj, setNewObj] = useState('')
  
  const myAdd = (event) => {
    event.preventDefault();
    const myObj = {
      content: newObj,
      more: true
    }

    const request = axios.post('http://localhost:3001/notes', myObj);
    request.then(response => response.data).then(ret => {
      setObjs(objs.concat(ret));
      setNewObj('');
      console.log(objs)
    });
  }

  const handleMyChange = (event) => {
    setNewObj(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>


      <ul>
        {objs.map(ob => (
          <li key={ob.id}>{ob.content}</li>
        ))}
      </ul>

      <form onSubmit={myAdd}>
        <input value={newObj} onChange={handleMyChange}/>
        <button type="submit">My Save</button>
      </form>
    </div>
  )
}

export default App