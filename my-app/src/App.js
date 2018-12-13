import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    users: [
      {name: "yuta"},
      {name: "Mike"}
    ]
  }

  changeNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeNameHandler} />
        <UserOutput name={this.state.users[0].name}/>
        <UserOutput name={this.state.users[1].name}/>
      </div>
    );
  }
}

export default App;
