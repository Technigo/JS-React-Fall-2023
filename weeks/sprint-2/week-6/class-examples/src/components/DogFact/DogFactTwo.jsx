// Explanation
// This component is designed to fetch and display dog facts from an external API. Upon initial render, it waits for 2 seconds (simulating a loading state) before fetching the first fact, which is then displayed in the DogFactContainer component. The component manages two pieces of state: fact (to store the retrieved dog fact) and loading (to manage the loading status of the data fetch). When a new fact is fetched, a loading state is indicated for 3 seconds before updating the displayed fact. The user can fetch additional facts by clicking a button, which triggers an immediate loading state until the new fact is fetched and displayed. This component demonstrates asynchronous data fetching, state management, and effect usage in a React functional component.
import { useEffect, useState } from "react";
import { DogFactContainer } from "./Common/DogFactContainer";
import "./DogFact.scss";

export const DogFactTwo = () => {
  // State: Manage the dog fact displayed in the UI
  const [fact, setFact] = useState(null);
  // State: Manage the loading status to provide user feedback during data fetching
  const [loading, setLoading] = useState(true);

  // Constant: Store the API endpoint URL
  const dogApi = "https://dogapi.dog/api/v2/facts";

  // Function: Asynchronously fetch a dog fact from the API
  const fetchDogFact = async () => {
    try {
      // Begin fetching: Set loading to true to indicate data fetching is in progress
      setLoading(true);
      // Fetch: Retrieve data from the API and parse it as JSON
      const response = await fetch(dogApi);
      const data = await response.json();

      // Data Check: Ensure data is present before attempting to use it
      if (data.data) {
        let cleanData = data.data;

        // Delay and State Update: Introduce a 2-second delay, then update the fact and loading state
        setTimeout(() => {
          setFact(cleanData[0].attributes.body);
          setLoading(false); // End fetching: Set loading to false as data has been fetched and state updated
        }, 2000);
      }
    } catch (error) {
      // Error Handling: Log any errors and set loading to false
      console.error("Error fetching the dog fact:", error);
      setLoading(false);
    }
  };

  // Effect: Fetch initial dog fact with a 1-second delay upon component mount
  useEffect(() => {
    setTimeout(() => {
      fetchDogFact();
    }, 1000);
  }, []);

  // UI: Render the DogFactContainer, displaying either the fact or a loading state, and a button to fetch a new fact
  return (
    <div className="dogCard">
      <DogFactContainer fact={fact} loading={loading} />
      <button onClick={fetchDogFact} className="btn">
        Get Another Fact
      </button>
    </div>
  );
};
