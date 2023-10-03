// Functions in JS
/*  Objective: By the end of this intro, you will understand the basic concepts of functions in JavaScript, 
including their purpose, different ways to declare them, how to use parameters, respond to events, pass arguments, 
and utilize the return statement.
 */

// -----
// -----
// -----
// -----

// What are Functions in JavaScript?
/* Functions in JavaScript are blocks of code that perform specific tasks. 
They allow you to group together a sequence of statements to be executed whenever needed. 
Functions play a crucial role in making your code organized, efficient, and reusable.
 */
// -----
// -----
// -----
// -----

// Why are functions important?
// Functions serve several important purposes:

// - Reusability: Instead of writing the same code multiple times, you can define a function once and reuse it whenever required.

// - Modularity: Functions allow you to break down complex tasks into smaller, manageable parts, making your code easier to understand and maintain.

// - Abstraction: Functions hide the implementation details, focusing on what the function does rather than how it does it, which enhances code readability.

// -----
// -----
// -----
// -----

// How to Declare Functions:
// There are two common ways to declare functions in JavaScript: regular function declarations and function expressions.

// Function Declaration

/* A regular function declaration starts with the function keyword followed by the function name and a pair of parentheses. 
The function body is enclosed in curly braces.

 */

// Regular function
function greet() {
  console.log("Hello! - GLOBAL SCOPE");
}
greet();

// Function Expression or Arrow function
// A function expression involves assigning an anonymous function to a variable. The variable then holds the function and can be used to call it.
const greetExpression = () => {
  console.log("Hello! - expression");
};
greetExpression();

// Pros and Cons of Function Expressions and Regular functions

// Regular functions
// PROS:
// - Hoisting: Regular functions are hoisted, which means they can be called before they are defined in the code. This allows you to place the function call anywhere in your code.
// - Clarity: Regular functions often lead to clearer code due to their traditional structure. The function's name is directly associated with its purpose.
// - Simplicity: They are straightforward to use and read, making them a good choice for simpler functions.

// CONS:
// - Global Scope: Regular functions are added to the global scope, which can lead to potential naming conflicts and code pollution in larger applications.
// - Order Dependency: Since Regular functions are hoisted, their order of appearance in the code can affect the program's behavior, potentially leading to unexpected results.

// Function Expressions:

// PROS:
// - Local Scope: Function expressions can be encapsulated within a block of code or another function, reducing the risk of polluting the global scope.
// - Flexibility: You can assign function expressions to variables, making them versatile and allowing you to pass functions as arguments or return them from other functions.
// - Closures: Function expressions are often used to create closures, which allow access to variables from their containing scope even after that scope has finished executing.

// CONS:
// - Hoisting Issue: Unlike Regular functions, function expressions are not hoisted, so they must be defined before they are called in the code.
// - Readability: Function expressions can be more complex to read, especially when they are assigned to variables with less intuitive names.
// - Debugging: Debugging function expressions might be more challenging since their variable name holds the function itself.

// console.log(myDeclaredFunction()); // This works
// console.log(myFunctionExpression()); // This will result in an error

// function myDeclaredFunction() {
//   return "I'm a declared function!";
// }

// const myFunctionExpression = function () {
//   return "I'm a function expression!";
// };

// -----
// -----
// -----
// -----

// Functions with Parameters:
// Parameters are placeholders for values that you can pass into a function to customize its behavior.

function greetOneParam(name) {
  console.log(`Hello ${name}!`);
}

greetOneParam("Nella");

function greetTwoParam(name, lastName) {
  console.log(`Hello ${name} ${lastName}!`);
}
greetTwoParam("Freddie", "Mercury");

// Functions with Events:
// You can use functions to respond to events, like when a button is clicked.

// Using AddEventListener
const button = document.querySelector("#myButton");

const alertMe = () => {
  alert("Button clicked through event listener");
};

// EASIER WAY BY BREAKING DOWN THE COMPLEXITY
button.addEventListener("click", alertMe);

// HARDER WAY TO WORK WITH THIS EVENTLISTENER
// button.addEventListener("click", () => {
//   alert("Button Click through event listener");
// });

// -----
// -----
// -----
// -----

// Inline dependency
const showMessage = () => {
  alert("Button clicked through inlineLogic");
};

// onClick Direct Event Handler
const buttonTwo = document.getElementById("myButtonTwo");
const showMessageTwo = () => {
  alert("Button clicked through event handler");
};
buttonTwo.onclick = showMessageTwo;

// Calling Functions with Arguments:
// Arguments are the actual values you provide to a function when you call it.
function add(a, b) {
  return a + b;
}
const result = add(5, 3);
console.log(result);
// -----
// -----
// -----
// -----

// The Return Statement:
// The return statement in a function specifies the value that the function will produce.
// Take a look

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const studentScore = 50;
const studentGrade = calculateGrade(studentScore);

console.log("Student score", studentScore);
console.log("Student grade", studentGrade);
// -----
// -----
// -----
// -----

//Summary:

// In this lesson, we covered the basics of functions in JavaScript. We learned what functions are, why they are important, and how to declare them using regular function declarations and expressions. We also explored using parameters to make functions more flexible, responding to events with functions, and calling functions with arguments. Functions are a fundamental concept in programming, and mastering them will greatly enhance your ability to write efficient and organized code.

// Functions should be defined using the const functionName = () => {} syntax (not using the function keyword) - this rule is mainly just for consistency.
