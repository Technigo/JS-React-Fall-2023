import { Atmosphere } from "./Atmosphere";
import { Description } from "./Description";
import { Moons } from "./Moons";
import "./Planet.css";

export const Planet = ({
  name,
  distance,
  diameter,
  moons,
  atmosphere,
  description,
}) => {
  return (
    <div className="planet">
      <p>
        <span>Name:</span>
        {name}
      </p>
      <p>
        <span>Distance from the sun:</span>
        {distance}
      </p>
      <p>
        <span>Diameter</span>
        {diameter}
      </p>

      <Moons moons={moons} />
      <Atmosphere atmosphere={atmosphere} />
      <Description description={description} />
    </div>
  );
};

Planet.defaultProps = {
  name: "Name is missing",
  distance: "Not available",
};
