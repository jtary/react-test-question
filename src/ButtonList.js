import React, { Component } from "react";
import Button from "./Button";

export default class ButtonList extends Component {
  static defaultProps = {
    buttons: []
  };

  constructor() {
    super();

    this.state = {
      nextId: 1,
      buttons: []
    };
  }

  addButton() {
    console.log("add button was clicked");

    const newButtonId = "btn-" + this.state.nextId;

    this.setState({
      buttons: [].concat(this.state.buttons, newButtonId),
      nextId: this.state.nextId + 1
    });
  }

  render() {
    const { buttons } = this.props;

    return (
      <div>
        <button onClick={this.addButton}>Add Button</button>
        <hr />
        <div>
          {buttons.map(buttonId => (
            <Button key={buttonId}>{buttonId}</Button>
          ))}
        </div>
      </div>
    );
  }
}
