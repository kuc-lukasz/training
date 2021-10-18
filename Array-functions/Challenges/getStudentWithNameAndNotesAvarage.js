const students = [
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ]

// studentNameWithAvgNotes = (array) => {
//     return array.map((student) => {
//         return {
//             name: student.name,
//             avgNotes: student.notes.reduce((prv, curr, i, array) => {
//                 prv += curr;
//                 if (i === array.length -1){
//                     return prv/array.length 
//                 }
//                 return prv
//             })
//         }
//     })
// }

studentNameWithAvgNotes = (array) => {
    return array.map((student) => {
        return {
            name: student.name,
            avgNotes: student.notes.reduce((prv, curr)=> prv + curr)/student.notes.length}}
    )}



console.log(studentNameWithAvgNotes(students))