// const numbers = [0,1,2,3,4,5,6,7,8,9]

// function x (array){
// return `(${array.slice(0,3).join("")}) ${array.slice(3,6).join("")} - ${array.slice(6,11).join("")} `

// }
// const phNumb = numbers.slice(0,5)

// console.log(phNumb)


// function phoneNumb(arrray) {
//     result = "("
//     for (i = 0; i < 3; i++) {
//          result += arrray[i]
//     }
//     result += ') '
//     for (i = 3; i < 6; i++) {
//          result += arrray[i]
//     }
//     result += '-'
//     for (i = 6; i < 10; i++) {
//          result += arrray[i]
//     }
    
//     return result
// }

// console.log(phoneNumb(numbers))

// const newx = x(numbers)

// console.log(newx)

function X (a, b) {
     return Array.from(new Set((a + b).split('')))
}

const arrayA = "abcd"
const arrayB = "cdef"

const newArray = X(arrayA, arrayB)
console.log(newArray)