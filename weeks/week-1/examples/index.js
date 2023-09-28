// Brief

// Start Here
// Welcome and Introduction

// Display a welcoming message for the user.

alert(
  "Welcome to the Music Festival Concert Slot Reservation. Get ready to choose your favourite music genre."
);

// Prompt the user to enter their name.

const userName = prompt("Please enter your name:");

// Display a greeting message with the user's name.

alert(`Hello ${userName}! Let's get started.`);

// Music Genre Selection
// Ask the user to choose a music genre.

const musicSelection = prompt(
  `Select your favourite music genre
  1 - Rock
  2 - Pop
  3 - Electronic
  Please enter the number of your choice`
);

// Initialize a variable to store the selected genre.
let selectedGenre = "";

// Determine the selected genre based on the user's choice.
if (musicSelection === "1") {
  selectedGenre = "Rock";
} else if (musicSelection === "2") {
  selectedGenre = "Pop";
} else if (musicSelection === "3") {
  selectedGenre = "Electronic";
} else {
  alert("Invalid choice, please start again and select an option. Bye 👋");
  exit(1);
}

// Display the chosen genre.

alert(`You chose ${selectedGenre}!`);

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
let concertSlot = "";
let artistNames = [];

// Determine the available concert slots and corresponding artist names.

switch (selectedGenre) {
  case "Rock":
    concertSlot = prompt(
      `Select a slot for Rock
      1 - The Strokes
      2 - Blink 182
      3 - Pearl Jam
      Please enter the number of your choice`
    );
    artistNames = ["The Strokes", "Blink 182", "Pearl Jam"];
    break;

  case "Pop":
    concertSlot = prompt(`Select a concert slot for Pop:
      1 - Rihanna
      2 - Beyonce
      3 - Ariana Grande
      Please enter the number of your choice:`);
    artistNames = ["Rhianna", "Beyonce", "Ariana Grande"];
    break;

  case "Electronic":
    concertSlot = prompt(`Select a concert slot for Electronic:
    1 - Tame Impala
    2 - Björk
    3 - Daft Punk
    Please enter the number of your choice:`);
    artistNames = ["Tame Impala", "Björk", "Daft Punk"];
    break;

  default:
    alert("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
}

// bonus
// Determine the selected time slot based on the user's concert slot choice.
let timeSlot = "";
switch (concertSlot) {
  case "1":
    timeSlot = "18:00";
    break;

  case "2":
    timeSlot = "21:00";
    break;

  case "3":
    timeSlot = "23:00";
    break;
  default:
    alert("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
}
// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.

if (concertSlot === "1") {
  alert(
    `Great choice! You've reserved a spot to see ${artistNames[0]} at ${timeSlot}
 for the ${selectedGenre} concert!`
  );
} else if (concertSlot === "2") {
  alert(
    `Great choice! You've reserved a spot to see ${artistNames[1]} at ${timeSlot} for the ${selectedGenre} concert!`
  );
} else if (concertSlot === "3") {
  alert(
    `Great choice! You've reserved a spot to see ${artistNames[2]} at ${timeSlot} for the ${selectedGenre} concert!`
  );
}

// To exit with a 'failure' code 1:
// The exit(1) command is used to exit a Node.js program with a non-zero exit code.
// In simpler terms, it's like pressing a stop button to immediately end the program's execution
// and indicate that something went wrong or an error occurred.
