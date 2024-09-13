import React, { Component } from "react";

export default class SecondClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondName: "John Doe",
    };
  }

  render() {
    return <h2>Hello Second {this.props.propsName}</h2>;
  }
}
