// APIs

/* An API, or Application Programming Interface, is like a menu in a restaurant.

Imagine you go to a restaurant, and instead of walking into the kitchen and telling 
the chef exactly how you want your meal prepared, you look at a menu that lists the available dishes. 
The menu provides a simple way for you to order your food without needing to know all the details of how it's cooked.

Similarly, an API is a set of rules and instructions provided by a software or service to interact with it. 
It's like a menu of options that developers can use to request specific functions or data from a program or 
service without needing to understand the inner workings of that program. It simplifies the way different software components or systems communicate and work together.

In essence, an API allows one piece of software to talk to and use the features of another piece of software, 
much like a restaurant menu allows you to order food without entering the kitchen. It's a way for different software applications to cooperate and share information, making it easier for developers to create new software by building on existing tools and services. */

/* The `fetch()` method is a built-in JavaScript function that is used to make network requests and retrieve data from a web server or other online resources. 
It's commonly used in web development to interact with APIs (Application Programming Interfaces) and fetch data from external sources.

 */
/* 1. **Making a Request:**
   - You call the `fetch()` method, passing in the URL of the resource you want to fetch as a parameter. For example:
   fetch('https://api.example.com/data')


2. **Asynchronous Nature:**
   - `fetch()` returns a Promise, which is JavaScript's way of handling asynchronous operations. 
   This means that while the request is being made to the server, your JavaScript code can continue executing without waiting for the response.

3. **Handling the Response:**
   - To work with the response from the server, you use Promise methods like `.then()` or `async/await` to handle the data when it becomes available. 
   Typically, you handle the response in a callback function.
 */

// API example https://www.boredapi.com/

const URL = "http://www.boredapi.com/api/activity";

const container = document.getElementById("activity");

const callApi = () =>
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse response as JSON
    })
    .then((data) => {
      // Use the data retrieved from the server
      container.innerText = data.activity;
      console.log(data);
    })
    .catch((error) => {
      // Handle errors, such as network issues or invalid responses
      container.innerText = error;
      console.error("Fetch error:", error);
    });

// callApi();

const fetchData = async () => {
  try {
    // Handle the response data here
    const response = await fetch(URL);
    const data = await response.json();
    container.innerText = data.activity;
    console.log(data);
  } catch (error) {
    container.innerText = error;
  }
};

// fetchData();

const fetchActivity = () => {
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      //inject HTML
      container.innerText = data.activity;
      console.log(data);
      return data;
    })
    .catch((error) => {
      container.innerText = error;
      console.log("Error:", error);
    }); //remove first letter in URL to showcase
};



const fetchActivityData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  container.innerText = data.activity;
  console.log(data);
};

// fetchActivityData()
// only the code within the then() and catch() method is executed after

// To access the returned object from an API call

fetchActivity()
  .then((data) => {
    // Now you can access the API response object stored in `apiData`
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


console.log("Talking about APIs and Promises");

/* 4. **Handling Errors:**
   - You can use `.catch()` to handle errors that might occur during the fetch operation, such as network problems or server errors.

In the example above, `fetch()` is used to make a GET request to an API (`https://www.boredapi.com/api/activity`).
 If the request is successful (HTTP status code 200-299), it parses the response as JSON and handles the data in the second `.then()` block. If there's an error, it's caught and handled in the `.catch()` block.

The `fetch()` method is a versatile tool for making network requests in JavaScript and is commonly used in web applications to fetch data, 
send data, and interact with remote APIs. It provides a flexible and powerful way to work with HTTP requests and responses in modern web development. */

/* In JavaScript, there are several ways to make API calls to fetch data from a server or interact with external APIs. 
The choice of method depends on your specific requirements and the environment in which your JavaScript code is running. 
Here are some common ways to make API calls with JavaScript: */

/* 1. Fetch API
The Fetch API is a more modern and flexible way to make API requests.
It uses promises, making it easier to work with asynchronous code.

2. Axios:
Axios is a popular third-party library for making HTTP requests in JavaScript

3. Async/Await (with Fetch or Axios):
You can use the async/await syntax with Fetch or Axios to write asynchronous code in a more synchronous style.

4. jQuery AJAX (if you're using jQuery):

5. XMLHttpRequest (XHR): */
