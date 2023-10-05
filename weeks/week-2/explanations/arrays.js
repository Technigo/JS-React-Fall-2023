// arrays
console.log("let's talk about arrays!");
// An array is a data structure that stores a collection of elements.
// You can declare an array using the square brackets [] notation.

// empty array
const emptyArray = [];

// array of numbers
const numberArray = [2, 4, 6, 8];
// array of strings
const stringArray = ["eat", "work", "sleep"];
// array with mixed data types
const mixedArray = ["work", "exercise", 1, true];

// ACCESS
// You can access elements in an array using their index. The index starts at 0 for the first element.

const team = ["Nella", "Poya", "Matilda", "Diego"];
console.log(team[1]);
console.log(team[3]);

// MODIFY
// You can modify elements in an array by assigning a new value to a specific index.

const animals = ["cat", "dog", "shark", "elephant", "squirrel"];
animals[2] = 10;
console.log(animals);
console.log(animals.length);

// ITERATE
// You can iterate over an array using loops, such as the for loop or the for of loop.

// Using for of loop:

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const plants = ["Rose", "Oak Tree", "Lavander", "Sunflower"];
for (let i = 0; i < plants.length; i++) {
  console.log(`My favourite plant is ${plants[i]}`);
}

/* In this example, the for...of loop iterates over each element in the array. 
On each iteration, the element variable takes the value of the current 
array element, and it is printed using console.log(element). 
This loop simplifies the syntax compared to the traditional for loop,
as you don't need to explicitly use the index to access each element. */

for (let element of planets) {
  console.log(element);
}

// ADD ELEMENTS
// You can add elements to an array using various methods.
// The push() method adds elements to the end of an array.

// For example:
const famousActors = [
  "Tom Hanks",
  "Leonardo DiCaprio",
  "Jennifer Lawrence",
  "Denzel Washington",
  "Cate Blanchett",
  "Brad Pitt",
  "Johnny Depp",
];

famousActors.push("Emma Stone");
console.log(famousActors);

// REMOVE
// The pop() method removes the last element from an array.
const presidents = [
  "George Washington",
  "Donald Trump",
  "John F. Kennedy",
  "Barack Obama",
];

presidents.pop();
console.log(presidents);

// CHECK PRESENCE
/* You can check if an element exists in an array using the includes() method or indexOf() method.
The includes() method returns true if the element exists, and false otherwise.
The indexOf() method returns the index of the element if found, and -1 otherwise. */

const stars = ["Sirius", "Vega", "Polaris", "Proxima Centauri", "Sun"];

console.log(stars.includes("Sirius"));
console.log(stars.includes("Alpha Centauri"));
console.log(stars.indexOf("Polaris"));
console.log(stars.indexOf(6));

// SORT
/* You can sort the elements of an array using the sort() method.
The sort() method sorts the elements alphabetically or numerically. */

const numbers = [3, 1, 2, 5, 4];
numbers.sort();
console.log(numbers);

console.log(stars.sort());

// FIND INDEX
// You can find the index of the first occurrence of an element in an array using the indexOf() method.

const foodArray = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos"];
let index = foodArray.indexOf("Sushi");
console.log(index);

// OTHER METHODS
// Array.filter()
// Returns a new array with all elements that pass the test implemented by the provided function.

const cities = ["Paris", "Rome", "Stockholm", "London"];
console.log(cities.filter((city) => city === "Stockholm"));

// Array.reduce()
// The reduce method returns the sum of all the elements in an array: The value returned by the function is stored in an accumulator (result/total).
/* The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value. */

const array = [1, 2, 3, 4];
const total = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total)

/* The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. 
Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element 
(index 1 instead of index 0). */

// 0 + 1 + 2 + 3 + 4

// another way


const myArray = [1, 2, 3, 4, 5];
const indexToRemove = 2; 
const numberOfItemsToRemove = 1; 
myArray.splice(indexToRemove, numberOfItemsToRemove);

console.log(myArray); 