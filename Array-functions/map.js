const names = ['Jak', "Tomasz", "Rysiek"]

function addSurname (surname){
    return surname + " Kowalski"
}

const nameSurname = names.map(addSurname)

console.log(nameSurname)