const form = document.querySelector("#searchForm");
const main = document.querySelector("#main");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  form.elements.query.value = "";
  displaySearch(res.data);
});

const displaySearch = (shows) => {
  for (let results of shows) {
    createCard(results);
  }
};

const createCard = (results) => {
  const card = document.createElement("div");
  card.id = "card-container";
  const img = document.createElement("img");
  img.className = "prevImg";
  img.src = results.show.image.medium;
  const desc = document.createElement("div");
  desc.id = "desc";
  const showName = document.createElement("h2");
  showName.id = "showName";
  showName.innerText = results.show.name;
  const avgRating = document.createElement("h3");
  avgRating.id = "avgRating";
  avgRating.innerText = "Rating Average: " + results.show.rating.average;
  const status = document.createElement("p");
  status.id = "status";
  status.innerText = "Status: " + results.show.status;
  const avgRun = document.createElement("p");
  avgRun.id = "avgRun";
  avgRun.innerText =
    "Average Runtime: " + results.show.averageRuntime + " minutes";
  const genre = document.createElement("p");
  genre.id = "genre";
  genre.innerText = "Genres: " + results.show.genres;
  main.appendChild(card);
  card.appendChild(img);
  desc.appendChild(showName);
  card.appendChild(desc);
  desc.appendChild(avgRating);
  desc.appendChild(status);
  desc.appendChild(avgRun);
  desc.appendChild(genre);
  return card;
};
