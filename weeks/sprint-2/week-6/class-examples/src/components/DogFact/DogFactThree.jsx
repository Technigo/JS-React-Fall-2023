// Explanation:
// This component is designed to fetch and display dog facts from an external API. Upon initial render, it fetches and displays a dog fact, and it provides two buttons for user interaction. The first button, "Get Another Fact", fetches a new dog fact when clicked but does not utilize the useEffect hook. The second button, "Increment Count", increments the count state, which is a dependency for the useEffect hook, thus triggering it to run the fetchDogFact function whenever it is clicked. This component demonstrates how to manage multiple pieces of state (fact and count) and how to utilize useEffect dependencies to control when side effects (like data fetching) should run, providing dynamic, interactive, and user-driven data fetching in a React functional component.
import { useEffect, useState } from "react";
import { DogFactContainer } from "./Common/DogFactContainer";
import "./DogFact.scss";

export const DogFactThree = () => {
  // State: Manage the dog fact displayed in the UI
  const [fact, setFact] = useState(null);
  // State: Manage a numerical count, which will be used to trigger the useEffect
  const [count, setCount] = useState(0);

  // Constant: Store the API endpoint URL
  const dogApi = "https://dogapi.dog/api/v2/facts";

  // Function: Asynchronously fetch a dog fact from the API
  const fetchDogFact = async () => {
    try {
      // Fetch: Retrieve data from the API and parse it as JSON
      const response = await fetch(dogApi);
      const data = await response.json();

      // Data Check: Ensure data is present before attempting to use it
      if (data.data) {
        let cleanData = data.data;
        // Logging: Output data to console for debugging
        console.log(cleanData);
        console.log(cleanData[0].attributes);
        // State Update: Set the 'fact' state with the fetched dog fact
        setFact(cleanData[0].attributes.body);
      }
    } catch (error) {
      // Error Handling: Log any errors during fetch to the console
      console.error("Error fetching the dog fact:", error);
    }
  };

  // Effect: Fetch a new dog fact whenever `count` changes
  useEffect(() => {
    fetchDogFact();
  }, [count]); // Dependency: useEffect responds to changes in `count`

  // UI: Render the DogFactContainer, a button to fetch a new fact, and a button to increment `count`
  return (
    <div className="dogCard">
      <DogFactContainer fact={fact} />
      {/* <button onClick={fetchDogFact}>Get Another Fact</button> */}
      {/* Button: Increment `count`, triggering the useEffect to run again */}
      <button onClick={() => setCount(count + 1)} className="btn">Increment Count</button>
      <p>Current count is {count}</p>
    </div>
  );
};
