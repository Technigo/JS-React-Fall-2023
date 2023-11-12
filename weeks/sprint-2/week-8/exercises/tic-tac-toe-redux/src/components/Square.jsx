import { Player } from "./Player";

export const Square = ({ value }) => {
  const handleClick = () => {
    // TODO send the captureSquare action
  };

  return (
    <button
      className={value === null ? "square clickable" : "square"}
      type="button"
      onClick={handleClick}
    >
      <Player value={value} />
    </button>
  );
};
