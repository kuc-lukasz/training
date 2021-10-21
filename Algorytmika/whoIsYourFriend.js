const people = ["Ania", "Hania", "Romek", "Jerzy", "Jack"]

// const friends = (array) => {
// array.filter(e => {
//     const letters = 4
//     if(e.length <= letters){
//         return e
//     }
     
// })
// }

const newFriend = people.filter(e => {
    const letters = 4
    if(e.length <= letters){
        return e
    }
    
})

console.log(newFriend)