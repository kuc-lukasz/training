const oldArray = [1,2,3,4,5, "Jerzy", "Zosia"]

const newArray = oldArray.filter(function (a){
 return typeof a === "string"

})

console.log(newArray)


