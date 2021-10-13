//Oprócz przekazania danych przekazuję również definicję funkcji "callback"

function multiplyarray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 3);
  }
  return result;
}

const output = multiplyarray([2, 5, 9]);
console.log(x);


function kombajn (array, callback){
    const result = [];
    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i]))
    } 
    return result
}

function addtwo (liczba) {
    return liczba * 3
}

const newArray = kombajn([2,5,7], addtwo)
console.log(newArray)

const names = ["Dominik", "Maciej", "Krzysiek", "Kasia", "Basia", "Zosia"];

names.forEach(function (el, i) {
  console.log(el);
  console.log(i);
   
});

const names = ["Dominik", "Maciej", "Krzysiek", "Kasia", "Basia", "Zosia"];

const result = names.map((name) => {
    return name + " Kowal"

})
console.log(result)


function addFive(input){
    return input + " Nowak"
}

function customForEach (array, callback){
    
}
