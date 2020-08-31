import React, { Component } from 'react';
import classes from './App.css';
import Person from './person/person'

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
    console.log('classes ***', classes)
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person {...person} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePersonHandler(index)} />
          })}
        </div >
      )
      //style.backgroundColor = 'red'

      // style[":hover"] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }
    }
    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App} >
        < h1 > Hi, i am a react app</h1 >
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={classes.button} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div >
    );

  }
}
// Radium is higher order component
export default App;
