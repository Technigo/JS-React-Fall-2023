export const DogFactContainer = ({ fact }) => {
  let cleanFact = fact;
  return (
    <div>
      <h4>{!cleanFact ? "Loading..." : cleanFact}</h4>{" "}
    </div>
  );
};
