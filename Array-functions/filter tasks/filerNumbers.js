const word = "a1b2c3"

const justNumbers = function(value) {
    return value.split('').filter(e => !isNaN(e)).join('')
}

console.log(justNumbers(word))