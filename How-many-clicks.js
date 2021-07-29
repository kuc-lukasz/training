const btn = document.getElementById("btn");
const textarea = document.getElementById("textare");
const numbersOfClick = document.getElementById("areaofText");
let howManyClick = 0;

btn.addEventListener("click", () => {
  howManyClick = howManyClick + 1;
  numbersOfClick.textContent = howManyClick;
  console.log("Zostało kliknięte:" + howManyClick);
});