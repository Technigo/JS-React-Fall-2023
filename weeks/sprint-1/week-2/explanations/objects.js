// Objects
console.log("let's talk about objects!");
/* Objects are a fundamental part of JavaScript. They allow you to store data in key-value pairs. 
Here are some examples to teach you about objects in JavaScript:
 */

// Creating an empty object
const user = {};

// Adding properties to the object
user.name = "John";
user.age = 30;
user.gender = "male";
console.log(user);

// Creating an object using object literal syntax

const instagramUser = {
  username: "tony_the_boss",
  fullName: "Tony Soprano",
  followers: 1000000,
  following: 4637,
  posts: [
    {
      id: 1,
      caption: "A beautiful day in New Jersey!",
      likes: 15000,
      comments: 10,
    },
    {
      id: 2,
      caption: "Delicious capocollo!",
      likes: 20000,
      comments: 15,
    },
    // Add more post objects as needed
  ],
  address: {
    city: "North Caldwell",
    zip: "10001",
    country: "USA",
  },
  bio: "Boss 👑 | Family man 👨‍👩‍👧‍👦 | Food lover 🍔 ",
  website: "https://www.thesopranos.com",
};

console.log(instagramUser);

// Accessing object properties using dot notation

console.log(instagramUser.username);
console.log(instagramUser.fullName);
console.log(instagramUser.address);

console.log(instagramUser.posts[0].caption);
// Accessing object properties using bracket notation

// ADD or UPDATE
//You can add or update properties of an object by assigning a value to a new or existing property using dot notation or bracket notation.

// Adding a new property
instagramUser.gender = "male";
instagramUser.age = 46;
console.log(instagramUser);
// Updating an existing property
instagramUser.username = "tony_soprano";
console.log(instagramUser.username);

// DEFINE METHODS IN AN OBJECT
// Methods in JavaScript objects are simply functions that are assigned as values to object properties.

const calculation = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculation.add(5, 3));
console.log(calculation.subtract(10, 4));

// Object constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}


// Creating objects using constructor function

let person1 = new Person("Christopher", 29);
let person2 = new Person("Paulie", 67);
console.log(person1, person2);

/* These examples cover various aspects of objects in JavaScript, 
including creating objects, accessing properties, working with nested objects, 
defining object methods, and using constructor functions to create objects. */
