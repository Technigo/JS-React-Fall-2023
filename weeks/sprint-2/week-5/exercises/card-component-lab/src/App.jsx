import "./App.css";
import Card from "./components/Card";


const App = () => {
  return (
    <>
      <Card
        buttonText="ORDER NOW"
        buttonTextColor="#000000"
        buttonColor="#FCED84"
        emoji="🍋"
        primary="#8CFFBA"
        secondary="#CFFFE2"
        subtitle="This is a really tasty fruit."
        subtitleColor="#000000"
        title="Lemon"
        titleColor="#166F39"
      />
      <Card
        buttonText="BOOK SEAT"
        buttonTextColor="#FFD600"
        buttonColor="#0B0C11"
        emoji="🚀"
        primary="#A6CFE2"
        secondary="#C2DCE9"
        subtitle="Join us into the outer space!"
        subtitleColor="#000000"
        title="Rocket"
        titleColor="#0B0C11"
      />
      <Card
        buttonText="ADOPT ME"
        buttonTextColor="#000000"
        buttonColor="#FCED84"
        emoji="🐶"
        primary="#EEB200"
        secondary="#FFE086"
        subtitle="Hello, do you want to be friends?"
        subtitleColor="#502F7E"
        title="Doggy"
        titleColor="#502F7E"
      />
    </>
  );
}

export default App;
