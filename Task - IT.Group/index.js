const eventNumb = document.querySelector("#evenNumb");
const oddNumb = document.querySelector("#oddNumb");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  eventNumb.innerHTML = "";
  oddNumb.innerHTML = "";

  function getRandomInt(min, max) {
    return Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * (max - min)) + min
    );
  }

  const randomInt = getRandomInt(1, 101);

  const odd = () =>
    randomInt
      .filter((e) => e % 2 === 0)
      .sort((a,b) => a > b? 1:-1)
      .forEach((e) => {
        let oddElement = document.createElement("td");

        oddElement.innerText = e;

        oddNumb.appendChild(oddElement);
      });

  const even = () =>
    randomInt
      .filter((e) => e % 2 !== 0)
      .sort((a,b) => a > b? 1:-1)
      .forEach((e) => {
        let evenElement = document.createElement("td");
        evenElement.innerText = e;
        eventNumb.appendChild(evenElement);
      });

  even();
  odd();
});
