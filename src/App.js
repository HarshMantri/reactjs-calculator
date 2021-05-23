import React, { Component } from "react";
import Numbers from "./Numbers";
import Operands from "./Operands";
import Brackets from "./Brackets";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOpenedBrackets: 0,
    };
  }

  clearBtnClicked = (e) => {
    let input = document.getElementById("inputField");
    input.removeAttribute("disabled");
    input.value = "";
    input.setAttribute("disabled", "disabled");
    this.setState({ numOpenedBrackets: 0 });
  };

  onOpenBracket = () => {
    this.setState({ numOpenedBrackets: this.state.numOpenedBrackets + 1 });
  };
  onCloseBracket = () => {
    this.setState({ numOpenedBrackets: this.state.numOpenedBrackets - 1 });
  };

  render() {
    let nums = [];
    for (let i = 1; i < 10; i++) {
      nums.push(<Numbers key={i} value={i} />);
    }
    nums.push(<Numbers key={0} value={0} />);

    let operands = [];
    let ops = ["+", "-", "*", "/", "="];
    for (let op of ops) {
      operands.push(<Operands key={op} value={op} />);
    }
    let brackets = [];
    let bracks = ["(", ")"];
    for (let bracket of bracks) {
      brackets.push(
        <Brackets
          key={bracket}
          value={bracket}
          numOpenedBrackets={this.state.numOpenedBrackets}
          onOpenBracket={this.onOpenBracket}
          onCloseBracket={this.onCloseBracket}
        />
      );
    }

    return (
      <div className="App">
        <h1 className="title">Calculator</h1>
        <section className="input">
          <input type="text" id="inputField" disabled />
          <section className="buttons">
            {nums}
            {operands}
            {brackets}
          </section>
          <section className="clear">
            <button
              className="clearAllBtn"
              id="clearAllBtn"
              onClick={this.clearBtnClicked}
            >
              Clear
            </button>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
