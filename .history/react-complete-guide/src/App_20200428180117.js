import React, { Component } from 'react';
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
    const doesShow = this.state.showPersons
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

    let persons = null
    if (this.state.showPersons) {
      persons = (<div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} >My Hobbies :Playing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div >)
    }
    return (
      <div className="App" >
        <h1>Hi , i am a react app</h1>
        <button style={this.style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div >
    );

  }
}
export default App;
