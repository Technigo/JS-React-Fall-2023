// Movie database

console.log("Movie database");

const apiKey = "bbc47393";
const apiUrl = "http://www.omdbapi.com/";
const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");

// Listen for changes in the input field
searchInput.addEventListener("input", () => {
  clearTimeout(typingTimer);
  // Wait 500ms after the user stops typing
  typingTimer = setTimeout(searchMovie, 500);
});

let typingTimer;
// Fetch some data

const searchMovie = () => {
  let searchValue = searchInput.value;

  searchValue = searchValue.trim();
  if (searchValue === "") {
    results.innerHTML = "";
    return;
  }

  const url = `${apiUrl}?apikey=${apiKey}&t=${searchValue}`;

  fetch(url)
    .then((response) => response.json())
    .then((movie) => {
      if (movie.Response === "True") {
        displayResults(movie);
      } else {
        results.textContent = "No results found";
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

const displayResults = (movie) => {
  results.innerHTML = "";

  const title = movie.Title;
  const year = movie.Year;
  const poster = movie.Poster;
  const movieId = movie.imdbID;

  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");

  movieDiv.innerHTML += `<a target="_blank" href="https://www.imdb.com/title/${movieId}">
  <h2>${title} (${year})</h2>
  ${
    poster !== "N/A"
      ? `<img src=${poster} alt="${title} poster"></img>`
      : `<div></div>`
  }
  </a>
  `;

  results.appendChild(movieDiv);
};
