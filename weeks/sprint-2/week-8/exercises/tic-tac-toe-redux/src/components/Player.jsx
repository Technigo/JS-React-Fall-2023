export const Player = ({ value }) => (
  <>
    {value === "x" && (
      <span role="img" aria-label="x">
        ❌
      </span>
    )}
    {value === "o" && (
      <span role="img" aria-label="o">
        ⭕️
      </span>
    )}
  </>
);
