function onlyPositiveNumbers (array) {
const positiveNumb = array.filter(item =>{
    return item > 0
})

const result = positiveNumb.reduce((prev, item) => {
    return prev += item

} )
return result
}


const testing = onlyPositiveNumbers([1,2,3,4,5])
console.log(testing)




// const oldArray = [14,22,31,74,5]

// const newArray = oldArray.reduce((prev, n, index, array) =>{
//     prev += n;
//     if (index === array.length-1){
//     return prev / array.length}
//     return prev
    
// },)

// console.log(newArray)





//Napisz funkcję, która policzy sumę dodatnich liczb z tablicy - użyj w tym zadaniu metody reduce.

// // [1,2,3,4,5]  //15
// // [1,-2,3,4,5] //13
// // [] // 0
// // [-1,-2,-3,-4,-5] //0
// // [-1,2,3,4,-5] //9

// function sumPositiveNumbers (array){
//     const positiveNumbers = array.filter((element)=> {
//         return element > 0
//     })


// const result = positiveNumbers.reduce((acc, element) => {
//     return acc + element

// },0)
// return result

// }

// console.log(sumPositiveNumbers([1,2,3,4,5]))
// console.log(sumPositiveNumbers([1,-2,3,4,5]))
// console.log(sumPositiveNumbers([]))
// console.log(sumPositiveNumbers([-1,-2,-3,-4,-5]))
// console.log(sumPositiveNumbers([-1,2,3,4,-5]))


// //Wyliczanie średniej w metodzie reduce 
// const orders = [4,3,6,11,14]

