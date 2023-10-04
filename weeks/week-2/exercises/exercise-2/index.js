// Functions + Conditionals Exercise

/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Nella and the navigator Tom" 
Where Nella represents the first argument passed in and Tom the second.
When you've set that up, invoke the function to see if it works.
*/
console.log("Iteration 01");
const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the the driver ${driver} and the navigator ${navigator}`
  );
};
// theCoders("Nella", "Tom");
console.log("----");
/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */
// console.log("Iteration 02");
// theCoders("Nella");
console.log("----");
/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
console.log("Iteration 03");
const longestName = (driver, navigator) => {
  switch (true) {
    case driver.length > navigator.length:
      console.log("The driver has the longest name.");
      break;
    case driver.length < navigator.length:
      console.log("The navigator has the longest name");
      break;
    default:
      console.log("The driver and the navigator has equally long names");
  }
};
// longestName("Nella", "Tom");
console.log("----");

/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */
console.log("Iteration 04");
console.log("---- Version 01");
console.log("Using if-else-if-else statements");
const tellMeYourAge = () => {
  let userAge = prompt("How old are you?");
  if (userAge <= 35) {
    console.log(`wow you are ${userAge}! that's young!`);
  } else if (userAge > 35 && userAge <= 60) {
    console.log(`wow you are ${userAge}! that's awesome!`);
  } else {
    return;
  }
};

// tellMeYourAge();

console.log("Using switch statements");
console.log("---- Version 02");
const tellMeYourAgeSwitch = () => {
  let userAge = parseInt(prompt("How old are you?"));
  switch (true) {
    case 18:
      console.log(`wow you are ${userAge}! that's young!`);
      break;
    case userAge >= 19 && userAge <= 30:
      console.log(`wow you are ${userAge}! that's swell!`);
      break;
    case userAge >= 31 && userAge <= 80:
      console.log(`wow you are ${userAge}! that's awesome!`);
      break;
    default:
      console.log(`Sit back and relax!`);
      break;
  }
};
// tellMeYourAgeSwitch();

console.log("----");

console.log("---- Version 03");
console.log("Using a ternary operator");
const tellMeYourAgeTernary = () => {
  let userAge = parseInt(prompt("How old are you?"));

  userAge === 18
    ? console.log(`wow you are ${userAge}! that's young!`)
    : userAge >= 19 && userAge <= 30
    ? console.log(`wow you are ${userAge}! that's swell!`)
    : userAge >= 31 && userAge <= 80
    ? console.log(`wow you are ${userAge}! that's awesome!`)
    : console.log("Sit back and relax!");
};
// tellMeYourAgeTernary();

console.log("---- Version 04");
console.log("Using if-else-if-else statements with typeChecking");
const tellMeYourAgeValidation = () => {
  let userAge = prompt("How old are you?");

  // Check if userAge is valid number
  if (isNaN(userAge)) {
    console.log("Invalid input. Please enter a number.");
    alert("Invalid input. Please enter a number.");
    tellMeYourAgeValidation();
    return;
  }

  // Converting string to number
  parseInt(userAge);

  if (userAge === 18) {
    console.log(`wow you are ${userAge}! that's young!`);
  } else if (userAge >= 19 && userAge <= 30) {
    console.log(`wow you are ${userAge}! that's swell!`);
  } else if (userAge >= 31 && userAge <= 80) {
    console.log(`wow you are ${userAge}! that's awesome!`);
  } else {
    console.log("Sit back and relax!");
  }
};
tellMeYourAgeValidation();
console.log("----");
/*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
console.log("Iteration 05");
const calculationTest = (num1, num2) => {
  let calculationRespons = parseInt(prompt(`What is ${num1} * ${num2}`));
  let rightAnswer = num1 * num2;
  if (calculationRespons === rightAnswer) {
    alert("Yay! Correct");
  } else {
    alert(`Noooo, the answer is ${rightAnswer}`);
  }
};
// calculationTest(2, 4);
console.log("----");

/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
console.log("Iteration 06");
const calculationRandomNum = (num1, num2) => {
  let calculationRespons = parseInt(prompt(`What is ${num1} * ${num2}`));
  let rightAnswer = num1 * num2;

  if (calculationRespons === rightAnswer) {
    alert("Yay! Correct");
  } else {
    alert(`Noooo, the answer is ${rightAnswer}`);
  }
};
// calculationRandomNum(
//   Math.floor(Math.random() * 10),
//   Math.floor(Math.random() * 10)
// ) + 1;
console.log("----");
