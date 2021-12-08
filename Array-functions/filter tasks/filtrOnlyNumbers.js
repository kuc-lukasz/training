const test1 = [1,2,'a','b']
const test2 = [1,'a','b',0,15]
const test3 = [1,2,'aasf','1','123',123]

function onlyNumbers (array) {
    return array.filter((e)=> {return !isNaN(e) & typeof e === "number"})

    return array.filter(e => Number.isInteger(e))
}



console.log(onlyNumbers(test1))
console.log(onlyNumbers(test2))
console.log(onlyNumbers(test3))