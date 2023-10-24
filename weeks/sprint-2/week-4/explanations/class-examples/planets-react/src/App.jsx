import { Header } from "./components/Common/Header";
import { ControlledFormExample } from "./components/Example";
import { Planet } from "./components/Planet/Planet";
import data from "./data.json";

const App = () => {
  const { planets } = data;
  const earth = planets.filter((planet) => planet.name === "Earth");
  const otherPlanets = planets.filter((planet) => planet.name !== "Earth");

  const renderPlanet = ({
    id,
    name,
    diameter,
    distanceFromTheSun,
    moons,
    atmosphere,
    description,
  }) => (
    <Planet
      key={id}
      name={name}
      diameter={diameter}
      distanceFromTheSun={distanceFromTheSun}
      moons={moons}
      atmosphere={atmosphere}
      description={description}
    />
  );

  const renderEarth = earth.map(renderPlanet);
  const renderPlanets = otherPlanets.map(renderPlanet);

  return (
    <div className="wrapper">
      <ControlledFormExample />
      <Header />
      <div className="container">
        <section className="planetOuter">
          <p className="title">🪐 Other planets</p>
          {renderPlanets}
        </section>
        <section className="planetOuter">
          <p className="title">🌎 Earth</p>
          {renderEarth}
        </section>
      </div>
    </div>
  );
};

export default App;
