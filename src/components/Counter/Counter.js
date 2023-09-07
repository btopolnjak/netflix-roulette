import React, { Component } from "react";
import "./Counter.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    const { initialCounterValue } = props;
    this.state = { count: initialCounterValue };
  }

  increment = () => {
    let { count } = this.state;
    this.setState({ count: ++count });
  };

  decrement = () => {
    let { count } = this.state;
    this.setState({ count: --count });
  };

  render() {
    return React.createElement(
      "div",
      { className: "counter" },
      React.createElement("button", { className: "counter__button", onClick: this.decrement }, "-"),
      React.createElement("p", { className: "counter__number" }, this.state.count),
      React.createElement("button", { className: "counter__button", onClick: this.increment }, "+")
    );
  }
}

export default Counter;
