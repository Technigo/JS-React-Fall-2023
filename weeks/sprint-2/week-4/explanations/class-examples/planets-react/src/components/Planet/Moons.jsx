export const Moons = ({ moons }) => {
  return (
    <p>
      <span>Moons:</span>
      {moons}
    </p>
  );
};

Moons.defaultProps = {
  moons: "No moons",
};
