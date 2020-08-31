import React, { useState, Component } from 'react';
import './App.css';
import Person from './person/person'
// react is required for rendering 

class App extends Component {
  state = {
    persons: [
      { name: ' Aqsa', age: 23 },
      { name: 'Saman Tariq', age: 10 },
      { name: 'zainab', age: 13 }
    ],
    otherState: 'other value',
    showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.StaticRange.showPersons
    this.setState({ showPersons: !doesShow })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'AQsa', age: 23 },
        { name: event.target.value, age: 10 },
        { name: 'zainab Gondal', age: 13 }
      ]
    })
  }
  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  render() {
    return (
      <div className="App" >
        <h1>Hi , i am a react app</h1>
        <button style={style} onClick={() => { switchNameHandler('Aqsa!!!!!!!!!') }}>Switch Name</button>
        {this.showPersons ? <div>
          <Person name={personState.persons[0].name} age={personState.persons[0].age} />
          <Person name={personState.persons[1].name} age={personState.persons[1].age} click={switchNameHandler.bind(this, 'jabeena')} changed={nameChangedHandler} >My Hobbies :Playing</Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].age} />
        </div > : null}
      </div >
    );

  }
}
export default App;
