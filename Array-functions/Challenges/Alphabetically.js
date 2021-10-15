// Ułóż studentów alfabetycznie 
//1. Co chce uzyskać na wyjściu? Tablice, więc użyję jedną z metod tablicowych 
// Chce zwrocic tyle samo elementow, ale elementy różne wiec uzywam map

const students =  [{ name: "Steve" },
{ name: "Becky" },
{ name: "John" },]

studentsAlphabetically = (array) => {
return array.map(student => student.name).sort()

}

console.log(studentsAlphabetically(students))



