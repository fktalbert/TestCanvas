import React, { Component } from 'react';
import { fabric } from 'fabric';

export default class Counter extends Component {
  state = { counter: 5 };

  componentDidMount() {
    // this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    // this.setState({ counter: this.state.counter - 1 });
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
      </div>
    )
  }
}
