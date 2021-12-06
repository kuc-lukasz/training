const array = [2,4,-1,-4,5, "Łukasz", "Maciek"]

const newarray = array.filter((element) =>{
    return element % 2 === 0
    
})
console.log(newarray)

const fullnbr = '1234567891234567'
const newfullnbr = fullnbr.slice(-4)
console.log(newfullnbr)
const credit = newfullnbr.padStart(fullnbr.length, '*')

console.log(credit)