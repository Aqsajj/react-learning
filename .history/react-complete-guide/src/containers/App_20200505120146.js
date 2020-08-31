import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/persons/persons'
import CockPit from '../components/cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: ' Aqsa', age: 23 },
      { id: '2', name: 'Saman Tariq', age: 10 },
      { id: '3', name: 'zainab', age: 13 }
    ],
    otherState: 'other value',
    showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  deletePersonHandler = (index) => {
    console.log('delete called')
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons })
  }

  render() {
    let persons = null
    if (this.state.showPersons) {
      console.log('persons==> ', this.state.persons)
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          >
          </Persons>
        </div>
      )
    }
    console.log(persons)


    return (
      <div className={classes.App} >
        <CockPit persons={this.state.persons} showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}></CockPit>
        {persons}
      </div >
    );

  }
}
// Radium is higher order component
export default App;
