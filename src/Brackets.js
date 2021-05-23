import React, { Component } from "react";

class Brackets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  sanitizeInput = () => {
    if (this.state.value === ")") {
      if (this.props.numOpenedBrackets > 0) {
        this.props.onCloseBracket();
        return true;
      } else {
        return false;
      }
    } else {
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
