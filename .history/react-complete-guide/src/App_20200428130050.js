import React, { Component } from 'react';
import './App.css';

// react is required for rendering 

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi , i am a react app</h1>
    //   </div>
    // );
    // elemwnt we want to render into the dom 
    return React.createElement('div', null, React.createElement('h1', null, 'Hi dear, i am a react app'))
  }

}

export default App;
