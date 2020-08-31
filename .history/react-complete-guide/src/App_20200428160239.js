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
  const switchNameHandler = () => {
    // it over writes so include all data
    setPersonsState({
      persons: [
        { name: ' Aqsa Gondal', age: 23 },
        { name: 'Saman Tariq Gondal', age: 10 },
        { name: 'zainab Gondal', age: 13 }
      ],
      otherState: 'other value'
    })
  }

  return (
    <div className="App">
      <h1>Hi , i am a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].name} >My Hobbies :Playing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].name} />
    </div>
  );

}

export default App;
