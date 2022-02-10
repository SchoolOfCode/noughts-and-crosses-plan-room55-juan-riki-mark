import React, { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "../Board/board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "🤖" : "👨";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `#${move}` : "Reset";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>
        Robots <span className="versus">v</span> Humans
      </h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <section className="info-wrapper">
        <header className="info-header">
          <p>History</p>
          <p>{winner ? "Winner: " + winner : "Next Player: " + xO}</p>
        </header>
        <ul className="move-list">{renderMoves()}</ul>
      </section>
    </>
  );
};

export default Game;
