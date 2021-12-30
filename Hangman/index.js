let words = ["html", "react", "css", "javascript"]

let word = words[1]

let wordsUsed = []

let guessedLetters = 0

let lifes = 10


function checkTheLetter (letter, word) {
    return word.includes(letter)
}

function howManyTimeOccurs (letter, word) {
    return [...word].filter(singleword => singleword === letter).length
}

function generateAlphabet() {
    let alphabetList = []

    for (let i = 97; i <= 122; i += 1){
        alphabetList.push(String.fromCharCode(i))
    }

    return alphabetList
}

console.log(generateAlphabet())

function writeLetter (letter) {

    if(wordsUsed.includes(letter)) {
        throw new Error('This wrote this later before!')

    }

    wordsUsed.push(letter)

    console.log(wordsUsed)

    let occurs = howManyTimeOccurs(letter, word)
    
    

    if(checkTheLetter(letter, word)){
        guessedLetters += occurs

        console.log(guessedLetters)
    } else {
        lifes -= 1
    }

    if (guessedLetters === word.length){
        window.alert('You WIN!')
    }

    if(lifes === 0){
        window.alert('You Lose My Dear :(')
    }

}

