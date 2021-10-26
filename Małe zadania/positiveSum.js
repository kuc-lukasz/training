// Stwórz funkcję która obliczy sumę liczb dodatnich 
// Najpierw filter powoduje że wybieramy tylko liczby dodatnie, następnie reduce sumuje nam liczby 

const arrayNumb = [3,4,5,1,3,-2,5,-1,-2]

// Pierwsza metoda
// function positiveNumb(array) {
//   const newArray = array.filter((e)=> {
//       return e > 0     
//   })  
// return newArray.reduce((acc, curr) => {
//     return acc + curr
// },0)
// }

//Druga metoda 
function positiveNumb(array) {
 const newArray = array.filter((e) => e > 0).reduce((prv, curr) => {return prv + curr})
 return newArray
}

console.log(positiveNumb(arrayNumb))

//filter zwróci nowy array który jest literowany przez tę funkcję