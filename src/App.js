import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

            Testing merge and amendment without pull or fetch.

            Now I am testing.

<<<<<<< HEAD
            Further tests! Monica!
=======
            Further tests

            Oh no, there have been changes to the master!
>>>>>>> 3cc1350681bc879d57cca0b89bf6918b60f62c4c
          </a>
        </header>
      </div>
    );
  }
}

export default App;
