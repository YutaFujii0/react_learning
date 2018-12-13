import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <input class="user-input" type="text" onChange={props.change} value={props.name} />
  )
}

export default userInput;
