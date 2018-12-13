import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is Yuta Fujii <code>src/App.js</code>.
          </p>
          <Person name="Yuta" age="25" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nulla quibusdam, obcaecati tempore tenetur hic et, facere consectetur fugit aliquam provident velit asperiores atque, veritatis aperiam ipsum voluptatem eos commodi.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
