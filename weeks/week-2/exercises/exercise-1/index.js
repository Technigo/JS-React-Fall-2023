// DOM Manipulation Exercise

console.log("Start Here 😉");

/**
 * 1. Target the div container element with the class of "box"
 * 2. change the background color of this element once the user
 * selects a theme from the theme options
 */

// Target the box
const boxElement = document.querySelector(".box");
const pElement = boxElement.firstElementChild;
pElement.style.color = "white";

// Get all input radios, three. The first is default
const radioButtons = document.querySelectorAll("input[type=radio]");

// Loop through radio buttons and add eventlisteners
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    // Change the background color on box element
    switch (radioButton.id) {
      case "dark":
        boxElement.style.backgroundColor = "#3b553b";
        break;
      case "light":
        boxElement.style.backgroundColor = "rgb(141, 198, 141)";
        break;
      case "crazy":
        boxElement.style.backgroundColor = "rgb(168, 21, 138)";
        break;
      default:
        boxElement.style.backgroundColor = "lightgreen";
    }
  });
});
