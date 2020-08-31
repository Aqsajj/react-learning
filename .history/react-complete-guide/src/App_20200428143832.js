import React, { Component } from 'react';
import './App.css';
import Person from './person'
// react is required for rendering 

class App extends Component {
  state = {
    persons: [
      { name: ' Aqsa', age='23' },
      { name='Saman Tariq', age='10' },
      { name='zainab', age='13' }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi , i am a react app</h1>
        <Person name='AQsa Jabeen' age='23' />
        <Person name='Saman Tariq' age='10' >My Hobbies :Playing</Person>
        <Person name='zainab' age='13' />
      </div>
    );

  }

}

export default App;
