import React, { Component } from 'react';
import './App.css';
import Person from './person'
// react is required for rendering 

class App extends Component {
  state = {
    persons: [
      { name: ' Aqsa', age: 23 },
      { name: 'Saman Tariq', age: 10 },
      { name: 'zainab', age: 13 }
    ]
  }

  switchNameHandler = () => {
    //  const persons= this.state.persons.map()
    //   this.setState({persons})
  }
  render() {
    return (
      <div className="App">
        <h1>Hi , i am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name} >My Hobbies :Playing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
      </div>
    );

  }

}

export default App;
