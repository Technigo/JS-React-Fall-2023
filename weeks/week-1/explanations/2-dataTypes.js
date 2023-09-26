// Data Types

// There are different types of data that we can use in a JavaScript.

// To be clear there are 2 types of data cagegories:
// - Primitive Data Types
// - Non-Primitive Data Types

// In simple terms, primitive data types represent only one value while non primitive data types are the collections of primitive data types

// Primitive Data Types:
// Strings - Represents textual data

// Number - An integer or a floating-point number
// BigInt - An integer with arbitrary precision - is a special type of number that allows you to work with really, really big whole numbers.
// Boolean - Any of two values: true or false
// Undefined - A data type whose variable is not defined or initialized
// Null -  A null value

// Non Primitive Data Types:
// Arrays - Container of multiples values of collection of data
// Objects - Container with key-value pairs of collection of data

// IMPORTANT!!!!
// The typeof operator returns a string indicating the type of the operand's value || the data type that is used.
// Is like a detective that helps you figure out what type of thing something is. It tells you if something is a number, a word, a function, or something else. It's like looking at an object and saying, "Hey, what are you?" to understand what kind of thing you're dealing with in your code.

// Examples

// Primitive Data Types

console.log("Strings Example");
console.log("Coding is fun!");
console.log(typeof "Coding is fun!");
console.log("-------------------------");


// Numbers

console.log("Numbers Example");
console.log(100);
console.log(50.5);
console.log(-4);
console.log(typeof -4);
console.log("-------------------------");


// bigInt

console.log("BigInt Example");
console.log(900719925124740999n);
console.log(typeof 900719925124740999n);
console.log("-------------------------");


// Boolean

console.log("Boolean Example");
console.log(true);
console.log(false);
console.log(typeof false);
console.log("-------------------------");


// undefined

console.log("undefined Example");
console.log(undefined);
console.log(typeof undefined);
console.log("-------------------------");



// Non-primitive Data Types
// arrays of strings

// arrays = []

console.log("Array of Strings Example");
console.log(["Gothenburg", "Stockholm", "Malmö", "Uppsala"]);
console.log("-------------------------");


const swedishCities = ["Gothenburg", "Stockholm", "Malmö", "Uppsala"]
console.log(swedishCities.length)


// arrays of numbers

console.log("Array of Numbers Example");
console.log([8, 4, 5, 7, 9]);
console.log("-------------------------");

// arrays mixed

console.log("Mixed Array Example");
console.log(["Sweden", 8, true, undefined, null]);
console.log("-------------------------");


// objects
// objects = {}

console.log("Objects Example - Using log() method");

const artist = {
  name: "Freddie",
  lastName: "Mercury",
  countryOfBirth: "Tanzania",
  age: 45,
  singer: true,
  labels: null,
  totalOfAlbums: 14,
  latestAlbum: "Innuendo",
}

console.log("artist", artist)
console.log(artist.totalOfAlbums)


// null value represents the intentional absence of any object value

// undefined


