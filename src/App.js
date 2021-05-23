import React, { Component } from "react";
import Numbers from "./Numbers";
import Operands from "./Operands";
import "./css/App.css";

class App extends Component {
  clearBtnClicked = (e) => {
    let input = document.getElementById("inputField");
    input.removeAttribute("disabled");
    input.value = "";
    input.setAttribute("disabled", "disabled");
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

    return (
      <div className="App">
        <h1 className="title">Calculator</h1>
        <section className="input">
          <input type="text" id="inputField" disabled />
          <section className="buttons">
            {nums}
            {operands}
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
