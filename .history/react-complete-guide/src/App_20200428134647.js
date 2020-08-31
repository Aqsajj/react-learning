import React, { Component } from 'react';
import './App.css';
import Person from './person'
// react is required for rendering 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , i am a react app</h1>
        <Person />
      </div>
    );

  }

}

export default App;
