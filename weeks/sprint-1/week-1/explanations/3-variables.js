// Variables

// What are Variables in JavaScript?
// In JavaScript, variables are like containers that hold information. They let you store different kinds of data, such as numbers, text, or more complex things like lists of items. Think of variables as labeled boxes where you can put stuff to use later.

// Why Use Variables in JavaScript?
// Variables are used to remember and manage information in a program. Instead of repeating the same value over and over, you can use a variable to store that value once and then use the variable name whenever you need it. This makes your code cleaner, easier to understand, and more flexible to change.

// 3 Ways of declaring Variables in JS
// They use JS reserved keywords

// let - New School - PREFFERED
// const - New School - PREFFERED

// Examples

const greeting = "Hello class!";

let favouriteBand = "Black Sabbath";
favouriteBand = "Europe";

console.log(favouriteBand);

// var firstName = "Andrea";
// console.log(firstName);

let lastName = "Bocelli";
console.log(lastName);

let role = "Singer";
role = "Drummer";
console.log(role);

// Camel Case Convention

let myCountryOfOrigin = "Italy";

// Difference of case sensitive variables

let phone = "Iphone";
let Phone = "Android";
console.log(phone, ",", Phone);

// Variable value reassignment

let coolVariable = "I Love pizza!";
coolVariable = "I love pasta!";
coolVariable = 24;
coolVariable = true;
console.log(coolVariable);

// Variable using Const
const singers = ["Beyonce", "The Weekend", "Aretha Franklin"];
console.table(singers);

// Empty values using let

let music;

music = ["RHCP", "Foo Fighters", "Queens of the Stone Age"];
console.table(music);

// Example of storing an array of objects inside

const movies = [
  {
    movie: "Wolf of Wallstreet",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
    year: 2010,
  },
  {
    movie: "Fight Club",
    genre: ["Drama", "Noir", "Comedy", "Action"],
    director: ["David Fincher"],
    location: "Los Angeles, California",
    actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
  },
];

// check lenght of an object
console.log(Object.keys(movies).length);
