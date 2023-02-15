import React from "react";
// import { useState } from "react";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "",
    };
  }

  //input
  //event target value
  //setState

  render() {
    console.log(this.state.currentWord.charAt(0));
    return (
      <div className="game-board">
        <div className="row-module">
          <div className="letter-box">{this.state.currentWord[0]}</div>
          <div className="letter-box">{this.state.currentWord[1]}</div>
          <div className="letter-box">{this.state.currentWord[2]}</div>
          <div className="letter-box">{this.state.currentWord[3]}</div>
          <div className="letter-box">{this.state.currentWord[4]}</div>
        </div>

        <input
          type="text"
          id="myText"
          value={this.currentWord}
          onChange={(e) => this.setState({ currentWord: e.target.value })}
        />
      </div>
    );
  }
}

export default Gameboard;
