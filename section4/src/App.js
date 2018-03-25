import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    username: 'Joe'
  }

  switchNameHandler = () => {
    this.setState({username: "Max"})
  }

  render() {
    return (
      <div>
        <UserInput></UserInput>
        <UserOutput name={this.state.username} click={this.switchNameHandler}></UserOutput>
        <UserOutput click={this.switchNameHandler}></UserOutput>
        <button onClick={this.switchNameHandler}> Switch </button> 

      </div>
    );
  }
}

export default App;
