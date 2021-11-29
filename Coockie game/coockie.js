const makeDought = document.querySelector("#make-dought");
const statusLine = document.querySelector(".status");

let doughtAmount = 0;
let doughtInterval = null;
let doughtProgress = 0

displaDoughtAmount()

makeDought.addEventListener("click", () => {
  doughtInterval = setInterval(() => {
      doughtProgress += 5
      if(doughtProgress === 140){
          doughtAmount ++;
          doughtProgress = 0;
          displaDoughtAmount()
      }
    statusLine.style.backgroundImage =
      `linear-gradient(90deg, rgba(3,107,34,1) 0%, rgba(0,0,0,0.7401229046306023) ${doughtProgress}%)`;
  }, 200);
});

function displaDoughtAmount(){
    document.querySelector(".dought-amount").innerText = doughtAmount;
}

