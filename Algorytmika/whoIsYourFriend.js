const people = ["Ania", "Hania", "Romek", "Jerzy", "Jack"]

// const friends = (array) => {
// array.filter(e => {
//     const letters = 4
//     if(e.length <= letters){
//         return e
//     }
     
// })
// }
function isfiend (e){
 return e.length === 4
}

function trueFr(arrayfriends){
    let x = arrayfriends.filter(isfiend)
    return x
}

// const trueFriend = people.filter(e => {
//     const letters = 4
//     if(e.length <= letters){
//         return e
//     }
    
// })

const realFr = trueFr(people)
console.log(realFr)