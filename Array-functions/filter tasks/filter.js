const oldArray = [1,2,3,4,5, "Jerzy", "Zosia"]

const newArray = oldArray.filter((a) => {

 return typeof a === "string"

})

console.log(newArray)

// console.log(newArray)

// function getEvenNumbers(array){
//     return array.filter(e => e % 2 === 0)  
     
//    }
//    const newFilterArrar = getEvenNumbers(oldArray)
//    console.log(newFilterArrar)
