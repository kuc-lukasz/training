const user1 = {
    id: 1,
    name: "Luka",
    age: 18,
}

const user2 = {
    id: 2,
    name: "Seba",
    age: 13,
}

const newUser = JSON.stringify(user2)
console.log(user2)
console.log(newUser)

const newUserAfterParse = JSON.parse(newUser)
console.log(newUserAfterParse)


function saveToLs (user) {
const userAsString = JSON.stringify(user);
window.localStorage.setItem(user.id, userAsString)

}

function getfromLS (id) {
    const newUser = window.localStorage.getItem(id)
   return JSON.parse(newUser)
}

// console.log(user1)
// console.log(saveToLs(user1))
