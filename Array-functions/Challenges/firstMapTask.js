const array = [1,2,3]

function changeArray (array) {
return array.map(e => e * 2 )

}

const newArray = changeArray(array)
console.log(newArray)