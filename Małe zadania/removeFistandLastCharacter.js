//usunie od kazdego słowa pierwszą i ostatnią literę 
const imie = "marek"


// Tutaj zamieniam na tablicę, ucinam elementy tablicy, a następnie wracam do stringa
function removing (word) {
return word.split("").slice(1,word.length-1).join("")
}

//tutaj odrazu metodą slice kroję wyraz
function removing (word) {
    return word.slice(1,word.length-1)
    }

console.log(removing("aaa"))


