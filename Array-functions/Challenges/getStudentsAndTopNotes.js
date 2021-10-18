// Chcemy uzyskać imię i najwyższa ocenę np. { name: "John", topNote: 5 },

const students = [
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ]


// function studentAndTopNotes(array) {
//     return array.map((student) => {
//         return {
            
//             name: student.name,
//             topNote: student.notes.reduce((max, next) => max >next ? max : next),
//         } 
//     })   
// }

// // Drugi sposób 

// function studentAndTopNotes(array) {
//     return array.map(({name, notes}) => ({
//         name, 
//         topNote: Math.max(...notes)
//     }))
    
// }


studentAndTopNotes = (array) => {
    return array.map((student) => {
        return {
            nane: student.name,
            Top: student.notes.reduce((prev, current) => prev > current ? prev : current),
        }
    })
        
}


console.log(studentAndTopNotes(students))