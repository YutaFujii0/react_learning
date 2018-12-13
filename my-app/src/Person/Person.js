import React, { Component } from 'react';

class person extends Component {
  render(props) {
    return (
      <p>I am {this.props.name} and {this.props.age} years old.</p>
    );
  }
}

export default person;
