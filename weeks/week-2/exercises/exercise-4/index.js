// Arrays Exercise

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

console.log("Iteration 01");
const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  let mySentence = `I have ${pokemons.length} pokemons`;
  console.log(mySentence);
};
countThem();
console.log("----");

console.log("Iteration 02");
console.log("Using sort() method");
const orderThem = () => {
  // order the pokemons alphabetically
  let orderedPokemons = pokemons.sort((pokemonOne, pokemonTwo) =>
    pokemonOne > pokemonTwo ? 1 : -1
  );
  console.table(orderedPokemons);
};
orderThem();
console.log("----");

console.log("Iteration 03");
console.log("Using sort() method - reversed");
const flipThem = () => {
  // reverse the order of the pokemons
  // order the pokemons alphabetically
  let reversedPokemons = pokemons.sort((pokemonOne, pokemonTwo) =>
    pokemonOne > pokemonTwo ? -1 : 1
  );
  console.table(reversedPokemons);
};
flipThem();
console.log("----");

console.log("Iteration 04");
const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((pokemon) => console.log(pokemon.toUpperCase()));
};
makeThemBig();
console.log("----");

console.log("Iteration 05");
console.log("Using filter() method + string method startsWith()");
const onlyTheBs = () => {
  // only print the pokemons that starts with B
  let filteredPokemons = pokemons.filter((pokemon) => pokemon.startsWith("B"));
  console.log(filteredPokemons);
  // filteredPokemons.forEach((pokemon) => console.log(pokemon));
};
onlyTheBs();

console.log("Using forEach() method + string method startsWith()");
const onlyTheBsTwo = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((pokemon) => {
    if (pokemon.startsWith("B")) {
      console.log(pokemon);
    }
  });
};
onlyTheBsTwo();
console.log("----");

console.log("Iteration 06");
const notTheCs = () => {
  // remove all pokemons that starts with C
  let filtered = pokemons.filter((pokemon) => !pokemon.startsWith("C"));
  filtered.forEach((pokemon) => console.log(pokemon));
};
notTheCs();
console.log("----");

console.log("Iteration 07");
const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  // Using forEach
  console.log("Using forEach() method");
  pokemons.forEach((pokemon, id) => {
    let myString = `Number ${id} - ${pokemon}`;
    console.log(myString);
  });
  // Using forLoop
  console.log("---");
  console.log("Using map() method");
  pokemons.map((pokemon, id, position) => {
    let myString = `Number ${id} - ${pokemon}`;
    console.log(myString);
  });
};
nameAndIdThanks();
console.log("----");

console.log("Iteration 08");
const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
  console.log(`${name} has been caught and added to the pokemons array!`);
};
catchPokemon("Raichu");
console.log(pokemons);
console.log("----");

console.log("Iteration 09");
const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  // pokemons.includes(name);
  if (pokemons.includes(name)) {
    console.log(`Cool, I already caught this pokemon: ${name}`);
  } else {
    console.log(`You have not catched this pokemon '${name}' yet, go for it!`);
  }
};
didICatchIt("Mewtwo");
console.log("----");

console.log("Iteration 10");
const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  // Explanation
  //The addPokemonToThirdPosition function uses the splice method to insert the Pokémon at the 3rd position, with a confirmation message logged afterwards. By modifying the pokemon variable inside the function, different Pokémon names can be added. The slice method, with arguments 2 and 0, extracts a portion of the pokemons array starting from the 2nd position, creating an empty slice that doesn't include any elements after the starting index.
  const pokemon = "Clefairy";
  pokemons.splice(2, 0, pokemon);
  console.log(
    `${pokemon} has been added to the 3rd position of the pokemons array!`
  );
};
addInThirdPlace();
console.log(pokemons);
console.log("----");

console.log("Iteration 11 ");
console.log("Bonus");
// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  const sortedPokemons = pokemons.sort((a, b) => b.length - a.length);
  longestNamePokemon = sortedPokemons[0];

  // Get the character count of the longestNamePokemon
  const characterCount = longestNamePokemon.length;
  console.log(longestNamePokemon, characterCount);
  console.log(
    `The pokemon with the longest name is ${longestNamePokemon} with ${characterCount} characters under his name`
  );
};
theLongestName();

console.log("----");
