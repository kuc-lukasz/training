//vovels = a,e,u,o,i
function vovelCount (word) {
// const vovelCounter = 0; 
const regex = /[a,e,u,o,i]/gm
const vovelnumber = word.match(regex) //wyświetlni tylko te liczby ktróre wyszczególniliśmy 
return vovelnumber ? vovelnumber.length : 0

}

function stringToArray (a) {
    return [...a]
}
console.log(stringToArray("Mati"))
console.log(vovelCount('luuksz'))

