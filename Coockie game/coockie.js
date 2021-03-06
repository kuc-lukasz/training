const makeDought = document.querySelector("#make-dought");
const statusLine = document.querySelector(".status");

let doughtAmount = 0;
let flourAmount = 100;
let doughtInterval = null;
let doughtProgress = 0


displaDoughtAmount();
displayFlourAmount();

function displayFlourAmount (){
    document.querySelector(".flour-status").innerText = flourAmount
}

function displaDoughtAmount(){
    document.querySelector(".dought-amount").innerText = doughtAmount;
}

makeDought.addEventListener("click", handleDoughtMakingStart);

function handleDoughtMakingStart (){

    makeDought.removeEventListener('click', handleDoughtMakingStart)
    makeDought.addEventListener('click', handleDoughtMakingStop)
    makeDought.innerText = "Zatrzymaj lepienie"

    doughtInterval = setInterval(() => {

        if(doughtProgress === 0){
            if(flourAmount < 10){
            displayFlourAmount()
            handleDoughtMakingStop()
            alert('Brak mąki!')
        } 
        flourAmount -= 10;
        displayFlourAmount()
        }

      doughtProgress += 5
      if(doughtProgress === 140){
          doughtAmount ++;
          doughtProgress = 0;
          displaDoughtAmount()
      }
    statusLine.style.backgroundImage =
      `linear-gradient(90deg, rgba(3,107,34,1) 0%, rgba(0,0,0,0.7401229046306023) ${doughtProgress}%)`;
  }, 10);
}

function handleDoughtMakingStop (){
    makeDought.removeEventListener('click',handleDoughtMakingStop)
    makeDought.addEventListener('click', handleDoughtMakingStart)
    makeDought.innerText = 'Ulep ciasto';
    clearInterval(doughtInterval);
}

