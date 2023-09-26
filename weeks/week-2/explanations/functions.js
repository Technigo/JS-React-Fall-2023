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
greet();

// -----
// -----
// -----
// -----

// How to Declare Functions:
// There are two common ways to declare functions in JavaScript: function declarations and function expressions.

// Function Declaration
/* A function declaration starts with the function keyword followed by the function name and a pair of parentheses. 
The function body is enclosed in curly braces.

 */function greet() {
  console.log("Hello! - GLOBAL SCOPE");
}

// Function Expression
// A function expression involves assigning an anonymous function to a variable. The variable then holds the function and can be used to call it.
const greetExpression = () => {
  console.log("Hello! - expression");
};
greetExpression();

// Pros and Cons of Function Expressions and Function Declarations
// Function Declarations
// PROS:
// - Hoisting: Function declarations are hoisted, which means they can be called before they are defined in the code. This allows you to place the function call anywhere in your code.
// - Clarity: Function declarations often lead to clearer code due to their traditional structure. The function's name is directly associated with its purpose.
// - Simplicity: They are straightforward to use and read, making them a good choice for simpler functions.

// CONS:
// - Global Scope: Function declarations are added to the global scope, which can lead to potential naming conflicts and code pollution in larger applications.
// - Order Dependency: Since function declarations are hoisted, their order of appearance in the code can affect the program's behavior, potentially leading to unexpected results.

// Function Expressions:

// PROS:
// - Local Scope: Function expressions can be encapsulated within a block of code or another function, reducing the risk of polluting the global scope.
// - Flexibility: You can assign function expressions to variables, making them versatile and allowing you to pass functions as arguments or return them from other functions.
// - Closures: Function expressions are often used to create closures, which allow access to variables from their containing scope even after that scope has finished executing.

// CONS:
// - Hoisting Issue: Unlike function declarations, function expressions are not hoisted, so they must be defined before they are called in the code.
// - Readability: Function expressions can be more complex to read, especially when they are assigned to variables with less intuitive names.
// - Debugging: Debugging function expressions might be more challenging since their variable name holds the function itself.

// -----
// -----
// -----
// -----

// Functions with Parameters:


// Functions with Events:


// -----
// -----
// -----
// -----



// -----
// -----
// -----
// -----

// The Return Statement:



// -----
// -----
// -----
// -----

//Summary:

// In this lesson, we covered the basics of functions in JavaScript. We learned what functions are, why they are important, and how to declare them using function declarations and expressions. We also explored using parameters to make functions more flexible, responding to events with functions, and calling functions with arguments. Functions are a fundamental concept in programming, and mastering them will greatly enhance your ability to write efficient and organized code.