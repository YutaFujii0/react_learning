import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="list-user">
      <p>{props.name}</p>
      <p>Le Wagon187</p>
    </div>
  );
}

export default userOutput;
