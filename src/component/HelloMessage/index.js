
import React , { Component } from 'react';
import "./index.scss"

export default class HelloMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="hello-message">
        <span>Hello {this.props.name}</span>
      </div>
    );
  }
}
