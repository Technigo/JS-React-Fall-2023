export const Atmosphere = ({ atmosphere }) => {
  return (
    <div>
      <span>Atmosphere:</span>
      {atmosphere.map((atm, key) => (
        <ul key={key}>
          {" "}
          <li key={atm}>{atm}</li>
        </ul>
      ))}
    </div>
  );
};

Atmosphere.defaultProps = {
  components: "Components are missing",
};
