// DOM (Document Object Model) and Dom Manipulation

/* Objective: By the end of this lesson, you will understand the basics of the Document Object Model (DOM) 
and how to manipulate it using JavaScript. 
You'll learn how to select elements, traverse the DOM, add and modify elements, insert and replace elements, 
and remove elements from a web page.
 */

// -----
// -----
// -----
// -----

// What is the DOM?

/* The Document Object Model (DOM) is a programming interface provided by browsers that represents the structure of an 
HTML document as a tree of objects. 
Each element, attribute, and text node in an HTML document is represented as a node in the DOM tree. 
JavaScript allows you to interact with and manipulate these nodes to dynamically change the content and structure of a web page.
 */

console.log("LOGGING THE DOCUMENT");

console.log("--------");

/* The WOM refers to the global object provided by a web browser environment, 
often referred to as the window object. The window object represents the browser window or the global context in which 
JavaScript code runs.
 */

// -----
// -----
// -----
// -----

// Why is the DOM Important?
/* The DOM is crucial for web development because it enables you to create interactive and dynamic web pages. 
By accessing and modifying the DOM, you can update the content, style, and behavior of a webpage in response to user actions or events.
 */

// How to Manipulate the DOM:

// Selecting Elements

/*  You can select elements from the DOM using various methods, such as 
getElementById, querySelector, querySelectorAll, getElementsByTagName and getElementsByClassName.
 */

console.log("Selecting Elements");
// getElementById
const byId = document.getElementById("dom-manipulation");

// getElementByClassName
const byClass = document.getElementsByClassName("highlight");
console.log(byClass);

// querySelector
const querySelector = document.querySelector(".highlight");
console.log(querySelector);

// querySelectorAll
const querySelectorAll = document.querySelectorAll("li");
console.log(querySelectorAll);

//getElementByTagName
const byTagName = document.getElementsByTagName("h5");
console.log(byTagName[2].innerHTML);

// getElementsByClassName
const elementsByClassName = document.getElementsByClassName("box");
console.log(elementsByClassName);

// Traversing the DOM
// DOM nodes have properties that allow you to navigate and access parent, child, and sibling elements

console.log("Traversing the DOM");
const parentElement = byId.parentNode;
console.log(parentElement);

const firstChild = parentElement.firstElementChild;
console.log("first child", firstChild);

const nextSibling = byId.nextElementSibling;
console.log("next sibling", nextSibling);
// -----
// -----
// -----
// -----

// Adding and Creating Elements
// You can create new DOM elements using createElement and add them to the DOM using methods like appendChild or insertBefore.

const newDiv = document.createElement("div");
parentElement.appendChild(newDiv);

// add new item to a list
const newLi = document.createElement("li");
const ulElement = document.getElementById("list");
newLi.innerText = "Item 5";
ulElement.appendChild(newLi);

// -----
// -----
// -----
// -----

// Modifying Element Properties
// You can change attributes, text content, and styles of elements using their properties.

newDiv.setAttribute("class", "my-dynamically-created-class");
newDiv.innerText = "Updated content";

// -----
// -----
// -----
// -----

// Inserting Elements
// You can insert elements before or after other elements using methods like insertBefore and insertAdjacentElement.
// insertBefore()

let newElement = document.createElement("p");
newElement.innerText = "This is a dynamically added paragraph";
let referenceElement = document.querySelector("#dom-manipulation");
let parentElementOfReferencedElement = referenceElement.parentNode;
parentElementOfReferencedElement.insertBefore(newElement, referenceElement);

// insertAdjacentElement()

let newElementAdjecent = document.createElement("div");
newElementAdjecent.innerText = "This is a dynamically added div";
newElementAdjecent.classList.add("my-dynamically-created-class");
referenceElement.insertAdjacentElement("afterend", newElementAdjecent);

// -----
// -----
// -----
// -----

// Replacing Elements
// You can replace one element with another using the replaceWith method.

// -----
// -----
// -----
// -----

// Removing Elements:
// To remove an element, use the remove method.
const toBeRemoved = document.querySelector(".removed-element");
toBeRemoved.remove();

// Comment the line above to see how the element appears back on the DOM :)

// -----
// -----
// -----
// -----

// -----
// -----
// -----
// -----

// Summary:

/* In this lesson, you've been introduced to the Document Object Model (DOM) 
and its importance in web development. You've learned how to select elements from the DOM, 
traverse its structure, add and create new elements, modify properties and attributes, insert and replace elements,
and remove elements. These skills will allow you to create dynamic and interactive web pages 
by manipulating the DOM using JavaScript.
 */
