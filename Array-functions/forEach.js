const numbers = [2,3,5,4]

function addSix(element, index){
    print(element + " oraz index " + index)
}

const newNumbers = numbers.forEach(addSix)
console.log(newNumbers)

