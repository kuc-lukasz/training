const oldArray = [1,2,3,4,5]

const newArray = oldArray.filter(e =>{
    return e > 3
})

console.log("Old ", oldArray)
console.log("New", newArray)