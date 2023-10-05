// Define an array of dog objects with information about each dog.
const DOGS = [
  {
    name: "Alfons",
    img: "assets/dog1.jpg",
    fur: "brown",
    puppy: false,
  },
  {
    name: "Bingo",
    img: "assets/dog2.jpg",
    fur: "brown",
    puppy: false,
  },
  {
    name: "Cecilia",
    img: "assets/dog3.jpg",
    fur: "mixed",
    puppy: true,
  },
  {
    name: "Doggo",
    img: "assets/dog4.jpg",
    fur: "black",
    puppy: true,
  },
  {
    name: "Eddie",
    img: "assets/dog5.jpg",
    fur: "grey",
    puppy: true,
  },
  {
    name: "Flora",
    img: "assets/dog6.jpg",
    fur: "mixed",
    puppy: true,
  },
  {
    name: "Gullan",
    img: "assets/dog7.jpg",
    fur: "black",
    puppy: false,
  },
];

// Initialize an empty array to store favorite dogs.
const faveDogs = [];

// Get references to HTML elements using their IDs.
const container = document.getElementById("container");
const favorites = document.getElementById("favorites");
const filterDropdown = document.getElementById("filterDropdown");

// Function to load and display the list of dogs.
const loadDogs = (dogArray) => {
  container.innerHTML = "";

  dogArray.forEach((dog) => {
    container.innerHTML += `
    <div class="card">
      <p>${dog.name}</p>
      <button onclick="addToFaves('${dog.name}')">Add to favories</button>
      <img src=${dog.img} art=${dog.name}>
      <p>${dog.puppy ? "PUPPY" : ""}</p>
    </div>
      `;
  });
};

// Function to filter and display dogs based on fur color.
const filterDogs = () => {
  // Get the selected value from the filter dropdown.
  const value = filterDropdown.value;

  if (value === "all") {
    loadDogs(DOGS);
  } else {
    // Otherwise, filter dogs based on fur color and load the filtered list.
    const filteredList = DOGS.filter((dog) => dog.fur === value);

    loadDogs(filteredList);
  }
};

// Function to add a dog to the list of favorite dogs.
const addToFaves = (dog) => {
  // Push the dog's name to the favorite dogs array.
  faveDogs.push(dog);
  // Update the display of favorite dogs.
  loadFaves();
};

// Function to display the list of favorite dogs.

const loadFaves = () => {
  // Clear the favorites element's content.
  favorites.innerHTML = "";
  // Iterate through the favorite dogs array and display their names.
  faveDogs.forEach((dog) => {
    favorites.innerHTML += ` <p>${dog}</p>`;
  });
};

// Apply the filter when the user changes the dropdown selection.
filterDropdown.addEventListener("change", filterDogs);
// Load the initial list of dogs when the page loads.
loadDogs(DOGS);
