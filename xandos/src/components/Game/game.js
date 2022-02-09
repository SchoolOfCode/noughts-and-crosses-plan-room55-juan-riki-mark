import "../Game/game.module.css";
import Board from "../Board/board";

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">Humans vs. Robots</header>
      <Board />
    </div>
  );
}

export default Game;
