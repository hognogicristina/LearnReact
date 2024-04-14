export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      {winner && (
        <div>
          <h2>Congratulations!</h2>
          <p>{winner} won!</p>
        </div>
      )}
      {!winner && (
        <div>
          <h2>Game Over!</h2>
          <p>It's a draw!</p>
        </div>
      )}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
