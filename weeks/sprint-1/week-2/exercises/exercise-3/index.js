// Loops & Objects Exercise

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

console.log("Iteration 01");

// Using Map
console.log("---- Using Map() Array Method");
pokemons.map((pokemon) => {
  console.log(pokemon);
});

// Using Filter()
console.log("---- Using Filter() Array Method");
pokemons.filter((pokemon) => {
  console.log(pokemon);
});

// Using For Each()
console.log("---- Using forEach() Array Method");
pokemons.forEach((pokemon) => {
  console.log(pokemon);
});

// Using For  Loop()
console.log("---- Using for Loop");
let usingForLoop = () => {
  for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
  }
};
usingForLoop();

// Using While Loop()
console.log("---- Using doWhile Statement");
let usingDoWhileLoop = () => {
  let index = 0;
  do {
    console.log(pokemons[index]);
    index++;
  } while (index < pokemons.length);
};
usingDoWhileLoop();

console.log("----");

// Using ForOf Loop()
console.log("---- Using forOf Loop");
let usingForOf = () => {
  for (const pokemon of pokemons) {
    console.log(pokemon);
  }
};
usingForOf();
console.log("----");

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
console.log("Iteration 02");
console.log("This iteration pertains to creating an object in code");
let pokemon = {
  name: "Pikachu",
  age: 400,
  category: "Mouse",
  abilities: ["static electricity", "cute"],
  strength: 32,
  weight: "6.0 KG",
};

console.log("----");
// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
console.log("Iteration 03");
console.log(
  `${pokemon.name} is a ${pokemon.abilities[0]} pokemon with the strength of ${pokemon.strength}`
);
console.log("----");

// 4)
// Add the property stillToCatch: true to the Pikachu object.
console.log("Iteration 04");
pokemon.stillToCatch = true;
console.table(pokemon);
console.log("----");

// 5)
// change the value of the key strength in the Pikachu object.
console.log("Iteration 05");
pokemon.stillToCatch = false;
console.table(pokemon);
console.log("----");

// 6)
// Delete a property from the Pikachu object.
console.log("Iteration 06");
delete pokemon.weight;
console.table(pokemon);
console.log("----");

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
console.log("Iteration 07");
console.log(
  "This iteration pertains to adding more pokemonsObjects to the array of objects"
);
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 32,
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32,
  },
  {
    name: "Pikachu",
    element: "earth",
    strength: 35,
  },
  {
    name: "Ditto",
    element: "earth",
    strength: 40,
  },
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
console.log("Iteration 08");
// Using forEach
console.log("---- Using forEach() Array Method");
moreAboutPokemons.forEach((pokemon) => {
  console.log(`Pokemon name: ${pokemon.name}`);
});

// Using Map
console.log("---- Using Map() Array Method");
moreAboutPokemons.map((pokemon) => {
  console.log(`Pokemon name: ${pokemon.name}`);
});

// Using Dot Notation
console.log("---- Using Dot Notation");
let dotNotationExample = `
Pokemon names: 
${moreAboutPokemons[0].name}
${moreAboutPokemons[1].name}
${moreAboutPokemons[2].name}
${moreAboutPokemons[3].name}
`;
console.log(dotNotationExample);

console.log("----");
// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.
console.log("Iteration 09");

// Using Dot Notation for just one element
console.log("---- Using Dot Notation for just one element");
let bulbasaur = `${moreAboutPokemons[0].name} is a ${moreAboutPokemons[0].element} pokemon with the strength of ${moreAboutPokemons[0].strength}`;
console.log(bulbasaur);

// Using forEach to loop through array of objects
console.log(
  "---- Using forEach to showcase all pokemons within array of objects"
);
moreAboutPokemons.forEach((pokemon) => {
  let text = `${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength}`;
  console.log(text);
});
