import React, { Component } from 'react';
import './App.css';
import Person from './person/person'
import styled from 'styled-components';

const StyledButton = styled.button` 
background-color: green;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover: {
  background-color: light-green;
  color: black;
}`
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
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App" >

        < h1 > Hi, i am a react app</h1 >
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>
        {persons}
      </div >
    );

  }
}
// Radium is higher order component
export default App;
