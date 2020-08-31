import React, { useState } from 'react';
import './App.css';
import Person from './person'
// react is required for rendering 

const App = (props) => {
  // current state
  // 
  const [personState, setPersonsState] = useState({
    persons: [
      { name: ' Aqsa', age: 23 },
      { name: 'Saman Tariq', age: 10 },
      { name: 'zainab', age: 13 }
    ],
    otherState: 'other value'
  })
  console.log("TCL: App -> personState", personState)
  const switchNameHandler = (nameInput) => {
    // it over writes so include all data
    setPersonsState({
      persons: [
        { name: nameInput, age: 23 },
        { name: 'Saman Tariq Gondal', age: 10 },
        { name: 'zainab Gondal', age: 13 }
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'AQsa', age: 23 },
        { name: event.target.value, age: 10 },
        { name: 'zainab Gondal', age: 13 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi , i am a react app</h1>
      <button onClick={() => { switchNameHandler('Aqsa!!!!!!!!!') }}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} click={switchNameHandler.bind(this, 'jabeena')} changed={nameChangedHandler} >My Hobbies :Playing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div >
  );

}

export default App;
