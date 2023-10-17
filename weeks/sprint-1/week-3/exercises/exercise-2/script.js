// API endpoint -> "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"

// Documentation -> https://dictionaryapi.com/products/api-collegiate-thesaurus

/* 1. Define params
Define the word and API_KEY as path and query parameters for the API.
Make sure to replace the values with your actual word and API key. */

/* 2. Construct the API URL:
Construct the URL using the word and API_KEY parameters:
 "
*/

/* 3. Define the fetchWord Function:
Define a function called fetchWord that makes a GET request to the API, parses the JSON response, 
and updates the HTML with the word data. This function should be asynchronous to handle the API request:
 */

/* 4. Define the displayResults Function:
Define a function called displayResults that takes the API response data and updates the HTML elements with the word, 
type, explanation, and synonyms:

 */

/* 5. Call the fetchWord Function:
At the end of your script, call the fetchWord function to initiate the API request and update the HTML
 */

//Some notes
/* The fetch function wants a URL in the form of a string, as an argument. The string
should include the URL to the API plus the different params, e.g. API Key
*/

/* We can use template literals to put together our string. So
backticks and then dollar sign, curly brackets. We also need to specify
the name of our query params, it's not enough to just paste them in.
These can be different from API to API and should always be specified
in the API's documentation.
*/
