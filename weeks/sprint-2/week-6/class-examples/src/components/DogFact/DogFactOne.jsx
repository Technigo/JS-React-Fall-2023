// Explanation:
// In this component we utilize the useState and useEffect hooks from React to manage state and side effects, respectively. The component fetches a dog fact when it first mounts (thanks to useEffect) and also provides a button to fetch additional facts. The fetched fact is passed as a prop to the DogFactContainer component for display.

// Importing the `useState` and `useEffect` hooks from the "react" library
import { useEffect, useState } from "react";
import { DogFactContainer } from "./Common/DogFactContainer";
import "./DogFact.scss";

// Importing the `DogFactContainer` component from the local file "DogFactContainer"

// Declaring a functional component named `ExampleOne`
export const DogFactOne = () => {
  // Using the `useState` hook to declare a state variable `fact` and its updater function `setFact`, initializing `fact` with `null`
  const [fact, setFact] = useState(null);

  // Declaring a constant `dogApi` to store the API endpoint URL as a string
  const dogApi = "https://dogapi.dog/api/v2/facts";

  // Declaring an asynchronous function `fetchDogFact` to fetch dog facts from the API
  const fetchDogFact = async () => {
    // Using the `fetch` API to make a network request to `dogApi`
    await fetch(dogApi)
      // Chaining a `.then()` to handle the response, converting it to JSON format
      .then((response) => response.json())
      // Chaining another `.then()` to handle the JSON data
      .then((data) => {
        // Checking if `data.data` exists
        if (data.data) {
          // Storing `data.data` in a variable `cleanData` for easier reference
          let cleanData = data.data;

          // Logging `cleanData` and `cleanData[0].attributes` to the console for debugging purposes
          console.log(cleanData);
          console.log(cleanData[0].attributes);

          // Updating the `fact` state with the body attribute of the first item in `cleanData`
          setFact(cleanData[0].attributes.body);
        }
      })
      // Chaining a `.catch()` to handle any errors that occur during the fetch operation
      .catch((error) => {
        console.error("Error fetching the dog fact:", error);
      });
  };

  // Using the `useEffect` hook to call `fetchDogFact` once when the component mounts (due to the empty dependency array `[]`)
  useEffect(() => {
    fetchDogFact();
  }, []);

  // with dependency, the `useEffect` hook to call `fetchDogFact` once when the component mounts and when the 'fact' changes
  /*   useEffect(() => {
    fetchDogFact();
  }, [fact]);
 */

  // Returning JSX to render the `DogFactContainer` component and a button. The `DogFactContainer` receives `fact` as a prop, and clicking the button triggers `fetchDogFact`
  return (
    <div className="dogCard">
      <DogFactContainer fact={fact} />
      <button onClick={fetchDogFact} className="btn">
        Get Another Fact
      </button>
    </div>
  );
};
