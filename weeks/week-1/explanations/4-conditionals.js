// Intro to JS Conditionals

// What are Conditionals:
// In JavaScript, conditionals are like decision-making tools for your code. They help your program decide what to do based on certain conditions. Just like making choices in real life, conditionals guide your code down different paths depending on what's happening.

// Why Use Conditionals:
// Conditionals are essential because they make your code smarter and more adaptable. They allow your program to respond to different situations dynamically, providing a personalized experience for users. Without conditionals, your code would follow the same instructions regardless of what's going on, which isn't always helpful.

// How Conditionals Work:
// Conditionals have 3 different approaches within JS
// - If Statements
// - Switch Case Statement
// - Ternary Operators

// Let's take a look

// ---
// ---
// ---
// ---
// ---

// IF Statements

// An if statement checks if something is true or false. If it's true, your code follows one set of instructions; if it's false, your code follows a different set. This helps your program make choices and react accordingly.

// We can use:
// if- Executes code if a condition is true.
// else - Executes one block of code if a condition is true, and another if it's false.
// else if -  Checks multiple conditions in sequence and executes the first block of code where the condition is true.

// Examples

// Example 01 - Using a simple if/else condition for age checking through a number dataType.
// Let's say you want to check the age of a person for a movie theater.

let age = 15;

// ---
// ---
// ---
// Example 02 - Using if/else-if/else condition for a weather checking through a string dataType.
// Let's say you want to check the weather to see if you can go to the beach

let weather = "rainy";

// ---
// ---
// ---
// Example 03 - Using a simple condition with a number and multiple conditions
// Let's say you're building a game where players earn points. You want to reward them differently based on their score.

let score = 45;

// In this example:

// What: We're using conditionals to determine the grade a player gets based on their score.
// Why: To provide personalized feedback and rewards to players based on their performance.
// How: The if statements check the score and decide which message to display.

// Common Comparison Operators:
// ===: Equals with a "strict" type check
// !==: Not Equals with a "strict" type check
// >: Greater Than
// <: Less Than
// >=: Greater Than or Equal To
// <=: Less Than or Equal To

// Nested Conditionals
// You can also put conditionals inside other conditionals. This helps your code make more complex decisions.

// Example 01
let isHungry = true;
let hasMoney = false;

console.log(isHungry);

// ----
// ----
// ----
// ----

// ----
// ----
// ----
// ----

// Switch Cases
// Switch cases are like multiple-choice questions for your code. They're a way to handle different scenarios based on the value of a single variable. Instead of using a bunch of if statements, switch cases let you choose from a list of options.

// Example 01 - Switch Case for specific case
// Imagine you're building a game where players can choose different characters. You want the game to react differently based on the chosen character.

// How Switch Cases Work:
// You have a variable that represents the player's chosen character.
// You use the switch keyword followed by the variable you're checking.
// Inside the switch block, you create cases for each character option.
// Each case represents a different option and contains the code you want to run for that option.
// At the end of each case, you use the break keyword to stop the code from running into the next case.

let chosenCharacter = "Hermione";

// Example 02 - Switch case for multiple cases
let month = "June";
