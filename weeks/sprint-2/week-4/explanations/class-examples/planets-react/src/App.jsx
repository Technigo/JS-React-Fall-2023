import { Header } from "./components/Common/Header";
import { Planet } from "./components/Planet/Planet";
import data from "./data.json";

const App = () => {
  const planets = data.planets;
  /* NOT DESTRUCTURED */
  /* const renderPlanets = () => planets.map((planet) => {
      return <Planet
      key={planet.id}
      name={planet.name}
      diameter={planet.diameter}
      distanceFromTheSun={planet.distanceFromTheSun}
      moons={planet.moons}
      atmosphere={planet.atmosphere}
      description={planet.description}
    />;
}) */

  /* DESTRUCTURED */
  const renderPlanets = () =>
    planets.map(
      ({ id, name, diameter, distance, moons, atmosphere, description }) => (
        <Planet
          key={id}
          name={name}
          diameter={diameter}
          distance={distance}
          moons={moons}
          atmosphere={atmosphere}
          description={description}
        />
      )
    );

  const renderContent = renderPlanets();

  return (
    <div className="App">
      <Header />
      <section className="planetOuter">{renderContent}</section>
    </div>
  );
};

export default App;

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
