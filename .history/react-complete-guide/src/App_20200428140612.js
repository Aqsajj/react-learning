import React, { Component } from 'react';
import './App.css';
import Person from './person'
// react is required for rendering 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , i am a react app</h1>
        <Person name='AQsa Jabeen' age='23' />
        <Person name='Saman Tariq' age='10' />
        <Person name='zainab' age='13' />
      </div>
    );

  }

}

export default App;
