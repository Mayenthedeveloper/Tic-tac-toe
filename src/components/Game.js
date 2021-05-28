import { stat } from "fs";
import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNummber: 0,
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
    };
  }

  jumpTo(step) {
    this.setState({
      stepNummber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNummber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);

    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "0";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNummber: history.length,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to #" + move : "Start the Game";
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });
    let status = winner
      ? "Winner  is " + winner
      : "Next player is " + (this.state.xIsNext ? "X" : "0");
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i) => this.handleClick} squares={current.squares} />
        </div>
        <div className="game-info">{status}</div>
        <ul>{moves}</ul>
      </div>
    );
  }
}

function calculateWinner(squares) {
  return null;
}
