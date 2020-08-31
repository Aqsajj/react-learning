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
        { id: '1', name: 'AQsa', age: 23 },
        { id: '2', name: event.target.value, age: 10 },
        { id: '3', name: 'zainab Gondal', age: 13 }
      ]
    })
  }

  deletePersonHandler = (index) => {
    console.log('delete called')
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState(persons)
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
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person {...person} click={() => this.deletePersonHandler(index)} />
          })}
        </div >
      )
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
