import React, { Component } from "react";

class Operands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  inputSanity = (inputText) => {
    if (inputText.length === 0) {
      return false;
    }
    let lastChar = inputText[inputText.length - 1];
    let badChar = new Set(["+", "-", "*", "/", "="]);
    if (badChar.has(lastChar)) {
      return false;
    }
    return true;
  };

  evaluateExpr = (input) => {
    if (this.props.numOpenedBrackets > 0) {
      input.removeAttribute("disabled");
      for (let i = 0; i < this.props.numOpenedBrackets; i++) {
        input.value += ")";
      }
      input.setAttribute("disabled", "disabled");
    }
    //Do the evaluation
    let expr = input.value;
    // eslint-disable-next-line
    let ans = eval(expr);

    //clear the input field for next computation
    input.removeAttribute("disabled");
    input.value = ans;
    input.setAttribute("disabled", "disabled");

    this.props.clearOpenedBrackets();
  };

  clickHandler = (e) => {
    let input = document.getElementById("inputField");
    if (this.inputSanity(input.value)) {
      if (this.state.value === "=") {
        this.evaluateExpr(input);
      } else {
        input.removeAttribute("disabled");
        input.value += this.state.value;
        input.setAttribute("disabled", "disabled");
      }
    } else {
      if (!input.value.length === 0) {
        input.removeAttribute("disabled");
        input.value = input.value.substring(0, input.value.length - 1);
        input.value += this.state.value;
        input.setAttribute("disabled", "disabled");
      }
    }
  };

  render() {
    return (
      <button className="operands" onClick={this.clickHandler}>
        {this.state.value}
      </button>
    );
  }
}

export default Operands;
