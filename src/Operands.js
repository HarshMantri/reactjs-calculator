import React, { Component } from "react";

class Operands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  inputSanity = (inputText) => {
    let lastChar = inputText[inputText.length - 1];
    let badChar = new Set(["+", "-", "*", "/", "="]);
    if (badChar.has(lastChar)) {
      return false;
    }
    return true;
  };

  evaluateExpr = (input) => {
    //Do the evaluation
    let expr = input.value;
    // eslint-disable-next-line
    let ans = eval(expr);

    //clear the input field for next computation
    input.removeAttribute("disabled");
    input.value = ans;
    input.setAttribute("disabled", "disabled");
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
      input.removeAttribute("disabled");
      input.value = input.value.substring(0, input.value.length - 1);
      input.value += this.state.value;
      input.setAttribute("disabled", "disabled");
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
