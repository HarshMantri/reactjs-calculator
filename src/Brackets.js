import React, { Component } from "react";

class Brackets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  sanitizeInput = () => {
    //don't allow empty brackets in expression
    if (this.state.value === ")") {
      let badPredecessor = new Set([")"]);
      let input = document.getElementById("inputField");
      if (badPredecessor.has(input.value[input.value.length - 1])) {
        return false;
      }

      if (this.props.numOpenedBrackets > 0) {
        this.props.onCloseBracket();
        return true;
      } else {
        return false;
      }
    } else {
      let goodPredecessor = new Set(["+", "-", "*", "/", "("]);
      let input = document.getElementById("inputField");
      if (
        input.value.length !== 0 &&
        !goodPredecessor.has(input.value[input.value.length - 1])
      ) {
        return false;
      }
      this.props.onOpenBracket();
      return true;
    }
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
      <button className="brackets" onClick={this.clickHandler}>
        {this.state.value}
      </button>
    );
  }
}

export default Brackets;
