import "./App.css";
import data from "./data.json";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <div>Book library goes here</div>
    </>
  );
}

export default App;
