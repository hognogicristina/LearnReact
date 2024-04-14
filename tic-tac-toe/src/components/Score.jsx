import { useEffect, useState } from "react";

export default function Score({ winner, players }) {
  const [score, setScore] = useState({
    [players.X]: 0,
    [players.O]: 0,
  });

  useEffect(() => {
    if (winner) {
      setScore((prevScore) => ({
        ...prevScore,
        [winner]: prevScore[winner] + 1,
      }));
    }
  }, [winner, players.X, players.O]);

  return (
    <div id="score">
      <p>
        {players.X}: {score[players.X]}
      </p>
      <p>
        {players.O}: {score[players.O]}
      </p>
    </div>
  );
}
