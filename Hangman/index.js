let words = ["javascript", "ccs", "html", "react"];

let word = words[0 ];
// tablica słów które zgadliśmy
let guessedLetters = 0;
// tablica słów które były już zgadywane
let attemptedLetters = [];
//liczba żyć
let lifes = 10;

//Czy litera która podaliśmy znajduje sie w danym słowie 
function isLetterInWord(letter, word) {
  return word.includes(letter) 
}



// liczenie ile razy wystepuje litera i zwraca mi konkretną liczbę 
function howManyOccurences(letter, word) {
  return [...word].filter((singleLetter) => singleLetter === letter).length;

}

console.log(howManyOccurences("s", word))

function generateAlphabet () {
    let arrayWithLetter = []
    arrayWithLetter = String.fromCharCode(66)
    console.log(arrayWithLetter)
}

console.log(generateAlphabet())

function move (letter) {
if(attemptedLetters.includes(letter)){
    throw new Error('Już wpisałeś tę literę')
    
}
attemptedLetters.push(letter)

console.log(attemptedLetters)

const occurences = howManyOccurences(letter, word)

if (isLetterInWord(letter, word)){
    guessedLetters += occurences 
} else {
 lifes -= 1
}

if (guessedLetters === word.length){
    window.alert('zajebiście zgadłeś!')
}

if (lifes === 0) {
    window.alert('przegrałes! :(')
}
console.log(lifes)
}

