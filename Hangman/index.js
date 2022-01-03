const keyboard = document.querySelector('.keyboard')
const wordBox = document.querySelector('.word')
const wrongMessage = document.querySelector('.wrongMessage')

let words = ["html", "react", "css", "javascript"]

let word = words[1]

let lettersUsed = []

let guessedLetters = 0

let lifes = 10


function checkTheLetter (letter, word) {
    return word.includes(letter)
}

function howManyTimeOccurs (letter, word) {
    return [...word].filter(singleword => singleword === letter).length
}

const alphabet = () =>  {
    let alphabetList = []

    for (let i = 97; i <= 122; i += 1){
        alphabetList.push(String.fromCharCode(i))
    }

    return alphabetList.forEach(data => {
        let div = document.createElement('div')
        div.innerText = data
        keyboard.appendChild(div)
    })
    
}

alphabet()
keyboard.addEventListener('click', (e)=> {
    let button = e.target.innerText
    console.log(button)


    writeLetter(button)
})

wordBox.innerText = word

function writeLetter (letter) {

    if(lettersUsed.includes(letter)) {
        const information = document.createElement('p')
        information.style.color = "red"
        information.style.fontSize = "large"
        information.innerText = "You used this letter before"
        console.log(information)
        wrongMessage.appendChild(information)
    }

    lettersUsed.push(letter)

    console.log(lettersUsed)

    let occurs = howManyTimeOccurs(letter, word)
    
    

    if(checkTheLetter(letter, word)){
        letter.style.color = 'red'
        guessedLetters += occurs
        console.log(word)

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


// keyboard.appendChild(newKeyboad)
