import { Player } from "./Player";

export const Stats = () => {
  // TODO - get the 'winner' from the game reducer
  const winner = null;
  // TODO - get the 'nextPlayer' from the game reducer
  const nextPlayer = "x";

  const handleButtonPress = () => {
    // TODO - dispatch the restart action
  };

  if (winner) {
    return (
      <div className="stats">
        <p>
          <Player value={winner} /> wins!!!!
        </p>
        <button type="button" onClick={handleButtonPress}>
          Start new game
        </button>
      </div>
    );
  }

  return (
    <div className="stats">
      <p>
        Next player <Player value={nextPlayer} />
      </p>
      <button type="button" onClick={handleButtonPress}>
        Restart
      </button>
    </div>
  );
};
