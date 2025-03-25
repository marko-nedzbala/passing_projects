import { useState, useEffect } from 'react'
import axios from 'axios';
import Note from './components/Note';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const [stocks, setStocks] = useState([]);

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data);
      })
  };

  useEffect(hook, []);

  // const hook2 = () => {
  //   axios
  //     .get('https://localhost:3001/numbers')
  //     .then(response => {
  //       setNotes(response.data);
  //     });
  // }
  // useEffect(hook2, []);

  console.log('render', notes.length, 'notes');

  const hook3 = () => {
    axios
      .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      .then(response => {
        setStocks(response.data);
        console.log(response);
      });
  }

  // useEffect(hook3, []);
  // console.log('Stocks', stocks.length);
  

  return (
    <>
      
    </>
  )
}

export default App
