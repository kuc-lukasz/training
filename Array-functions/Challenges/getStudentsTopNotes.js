// Uzyskaj tablice z najwyższą oceną dla każdego studenta, czyli [5,5,4]

const students = [
{   id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5],
  },
  { id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5],
  },
  {    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3],
  },
],

getTopNotes = (array) => {
    return array.map((student) => {
        return student.notes.reduce((max, next) => max > next ? max : next)
    }) 
}

// druga opcja 
getTopNotes = (array) => array.map(({ notes }) => Math.max(...notes))

//reduce zawsze przekazywal do literacji jedną z dwóch wiekszych liczb

console.log(getTopNotes(students))