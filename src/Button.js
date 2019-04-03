import React, { Fragment, Component } from "react";

const DEFAULTS = {
  clicked: 0
};

const COLORS = {
  green: 0,
  yellow: 2,
  orange: 4,
  red: 5
};

export default class Button extends Component {
  constructor() {
    super();
    this.state = { ...DEFAULTS };
  }

  calculateColor() {
    let lastColor = "green";

    for (let [color, min] in Object.entries(COLORS)) {
      if (this.state.clicked >= min) {
        lastColor = color;
      } else {
        break;
      }
    }

    return lastColor;
  }

  updateClicks() {
    console.log(`update clicks for button ${this.props.children} was clicked`);

    this.state.clicked = this.state.clicked + 1;
  }

  render() {
    return (
      <Fragment>
        <button
          onClick={evt => this.updateClicks()}
          style={{ backgroundColor: this.calculateColor() }}
        >
          {this.props.children} ({this.state.clicked})
        </button>
      </Fragment>
    );
  }
}
