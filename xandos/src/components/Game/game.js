import "./game.css";
import Board from "../Board/board";

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">Humans vs. Robots</header>
      <div className={Style.bkgdimage}></div>
      <Board />
    </div>
  );
}

export default Game;
