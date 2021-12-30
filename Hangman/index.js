let word = "html"

let wordsUsed = []

let guessedLetters = 0

let lifes = 10


function checkTheLetter (letter, word) {
    return word.includes(letter)
}


function howManyTimeOccurs (letter, word) {
    return [...word].filter(singleword => singleword === letter).length
}

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