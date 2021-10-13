//Napisz funkcję, która policzy sumę dodatnich liczb z tablicy - użyj w tym zadaniu metody reduce.

// [1,2,3,4,5]  //15
// [1,-2,3,4,5] //13
// [] // 0
// [-1,-2,-3,-4,-5] //0
// [-1,2,3,4,-5] //9

function sumPositiveNumbers (array){
    const positiveNumbers = array.filter((element)=> {
        return element > 0
    })


const result = positiveNumbers.reduce((acc, element) => {
    return acc + element

},0)
return result

}


console.log(sumPositiveNumbers([1,2,3,4,5]))
console.log(sumPositiveNumbers([1,-2,3,4,5]))
console.log(sumPositiveNumbers([]))
console.log(sumPositiveNumbers([-1,-2,-3,-4,-5]))
console.log(sumPositiveNumbers([-1,2,3,4,-5]))

