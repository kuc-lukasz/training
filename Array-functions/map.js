const names = ['Jak', "Tomasz", "Rysiek"]

function addSurname (surname, index){
    return index+" " + surname + " Kowalski" 
}

const nameSurname = names.map(addSurname)

console.log(nameSurname)