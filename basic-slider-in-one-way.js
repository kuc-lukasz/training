const backBtn = document.querySelector("#back-btn");
    const nextBtn = document.querySelector("#next-btn");
    let image = document.querySelector("img:first-of-type");
    image.classList.add("current-pic");

    let howManyClick = 0;

    function nextPic() {
      console.log("zmiana klasy");
      howManyClick = (howManyClick + 1) % 3;
      image.classList.remove("current-pic");
      image = document.querySelector(`img:nth-of-type(${howManyClick + 1})`);
      image.classList.add("current-pic");
    }
    function prevPic() {
      console.log("zasasa");
      howManyClick = howManyClick - 1;
      image.classList.remove("current-pic");
      image = document.querySelector(`img:nth-of-type(${howManyClick + 1})`);
      image.classList.add("current-pic");
    }

    nextBtn.addEventListener("click", nextPic);
    backBtn.addEventListener("click", prevPic);