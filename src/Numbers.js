import React, { Component } from "react";

class Numbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  sanitizeInput = () => {
    let badPredecessor = new Set([")"]);
    let input = document.getElementById("inputField");
    if (badPredecessor.has(input.value[input.value.length - 1])) {
      return false;
    }
    return true;
  };

  clickHandler = (e) => {
    if (this.sanitizeInput()) {
      let input = document.getElementById("inputField");
      input.removeAttribute("disabled");
      input.value += this.state.value;
      input.setAttribute("disabled", "disabled");
    }
  };
  render() {
    return (
      <button className="numbers" onClick={this.clickHandler}>
        {this.state.value}
      </button>
    );
  }
}

export default Numbers;
