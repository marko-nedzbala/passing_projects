import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>The app is used by pressing the buttons</div>
    )
  }
  return (
    <div>Button press history: {props.allClicks.join(' ')}</div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = (props) => {
  if(props.feedback.length === 0 || isNaN(props.feedback)) {
    return (
      <>No feedback yet given</>
    )
  }
  return (
    <>{props.feedback}</>
  )
}

const StatisticLine = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Button2 = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)






function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    }
    setClicks(newClicks);
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks);
  }

  const setToZero = () => {
    setClicks({left: 0, right: 0});
  }


  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick2 = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  }

  const handleRightClick2 = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  }


  // excerise
  const [good, setGood] = useState(0);
  const [netural, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  }

  const handleNeutral = () => {
    const updatedNeutral = netural + 1;
    setNeutral(updatedNeutral);
  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  }

  const all = good + netural + bad;
  const score = good + (bad * -1);
  const percentage = good / all;



  return (
    <>
      {clicks.left}<button onClick={handleLeftClick}>Left</button>
      {clicks.right}<button onClick={handleRightClick}>Right</button>
      <button onClick={setToZero}>Zero</button>

      {left}<Button onClick={handleLeftClick2} text='left' />
      {right}<Button onClick={handleRightClick2} text='right' />
      <p>{allClicks.join(' ')}</p>
      <p>Total: {total}</p>

      <br />
      <History allClicks={allClicks} />

      <br />
      {/* <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button> */}
      <p>Good: {good}</p>
      <p>Netural: {netural}</p>
      <p>Bad: {bad}</p>
      <p>Sum: {all}</p>
      <p>Score: {score}</p>
      <p>Percentage: {percentage}</p>
      <Statistics feedback={good / all} />
      <br />
      <StatisticLine onClick={handleGood} text='Good' />
      <StatisticLine onClick={handleNeutral} text='Netural' />
      <StatisticLine onClick={handleBad} text='Bad' />

      {/* <Button2 onClick={() => console.log('test')} text='example' /> */}
    </>
  )
}

export default App
