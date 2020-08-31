import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/persons/persons'
import CockPit from '../components/cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary';

class App extends Component {
  // constructor(props) {
  //   //console.log('constructor called')
  //   super(props)
  //   // we can set state here
  // }

  state = {
    persons: [
      { id: '1', name: ' Aqsa', age: 23 },
      { id: '2', name: 'Saman Tariq', age: 10 },
      { id: '3', name: 'zainab', age: 13 }
    ],
    otherState: 'other value',
    showPersons: false,
    showCockPit: true,
    changedCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(' app getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    // we can make http request here
    //console.log(' component did mount ')
  }

  // componentWillMount() {
  //   // we can make http request here
  //   console.log(' component will mount ')
  // }

  componentDidUpdate() {
    //console.log("TCL: App -> componentDidUpdate -> componentDidUpdate")
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("TCL: App -> shouldComponentUpdate -> shouldComponentUpdate")
    return true
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
    this.setState((prevState, currProps) => { return { persons, changedCounter: prevState.changedCounter + 1 } })
  }

  deletePersonHandler = (index) => {
    //console.log('delete called')
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons })
  }

  LoginHandler = () => {
    console.log(this.state.authenticated)
    console.log("TCL: App -> LoginHandler -> LoginHandler")

    this.setState({ authenticated: true })
    console.log(this.state.authenticated)
  }

  render() {
    //console.log(' app renders ')
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          >
          </Persons>
        </div>
      )
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockPit: false }) }}>Remove cockpit</button>
        {this.state.showCockPit ?
          <CockPit personsLength={this.state.persons.length} showPersons={this.state.showPersons}
            clicked={this.togglePersonHandler}
            title={this.props.appTitle}
            login={this.LoginHandler}
          ></CockPit> : null}
        {persons}
      </Aux>
    );

  }
}

// Radium is higher order component
export default withClass(App, classes.App);
