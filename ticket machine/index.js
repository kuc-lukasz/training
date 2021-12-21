const search = document.querySelector("#form-search");

const getDataFromResponse = (response) => {
  return response.json();
};

const sorting = data => data.sort((a, b) => (a.distance > b.distance ? 1 : -1));
const displayCities = (data) => {
  const listOfCities = document.querySelector(".list-of-cities");
  listOfCities.innerHTML = "";

  data.forEach((file) => {
    let citiesElement = document.createElement("li");
    citiesElement.innerText = `${file.city} ${file.distance}`;
    listOfCities.appendChild(citiesElement);
  });
};

const filtering = data => data.filter(doc => doc.city.includes(searchingInput))

const getCities = () => {
  fetch("./data/cities.json")
    .then(getDataFromResponse)
    .then(sorting)
    .then(displayCities);
};

getCities();

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchingInput = search["inputSearch"].value;
  console.log(searchingInput.value);

  fetch("./data/cities.json")
    .then(getDataFromResponse)
    
    .then(sorting)
    .then(data => data.filter(doc => doc.city.includes(searchingInput)))
    .then(displayCities);
});
