// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>Course name: {props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Parts: {props.name}, Number of exercises: {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h2>Total number of exercises: {props.total}</h2>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <h1>Course name: {props.title}</h1>
      <p>Part: {props.part}</p>
      <p>Exercise count: {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const name = 'Peter';
  const age = 10;



  const courses = {
    course01: {
      title: 'Intro to React',
      part1: 'Fundamentals of React',
      exercises: 10,
    },
    course02: {
      title: 'Intermediate React',
      part: 'More of React',
      exercises: 17,
    },
    course03: {
      title: 'Advanced React',
      part: 'Hard React',
      exercises: 26,
    }
  }

  return (
    <div>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name={name} age={age}/>

      <Header name={courses.course01.title} />
      <Content name={courses.course01.part1} exercises={courses.course01.exercises} />

      <Header name={courses.course02.title} />
      <Content name={courses.course02.part} exercises={courses.course02.exercises} />

      <Header name={courses.course03.title} />
      <Content name={courses.course03.part} exercises={courses.course03.exercises} />

      <Total total={courses.course01.exercises + courses.course02.exercises + courses.course03.exercises} />

      <br />
      <Part title={courses.course01.title} part={courses.course01.part1} exercises={courses.course01.exercises}/>
      <Part title={courses.course02.title} part={courses.course02.part1} exercises={courses.course02.exercises}/>
      <Part title={courses.course03.title} part={courses.course03.part1} exercises={courses.course03.exercises}/>
    </div>
  )
}

export default App;