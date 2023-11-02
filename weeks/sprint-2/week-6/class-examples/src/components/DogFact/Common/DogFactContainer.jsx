export const DogFactContainer = ({ fact }) => {
  let cleanFact = fact;
  return (
    <div>
      <h3>{!cleanFact ? "Loading..." : cleanFact}</h3>{" "}
    </div>
  );
};
