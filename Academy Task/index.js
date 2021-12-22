const getStudentFiles = (response => response.json())
const getStudentData = (data => { return data})

const displayNamesOfStudents = (students) => {
    
    const listOfStudents = document.getElementById('listOfStudents')
    const theadTag = document.createElement('thead')
    const trTag = document.createElement('tr')
    const id = document.createElement('th')
    const name = document.createElement('th')
    const surename = document.createElement('th')
    const city = document.createElement('th')
    const averageMarks = document.createElement('th')
    const studentGroups = document.createElement('th')

    id.innerText = 'id'
    name.innerText = 'name'
    surename.innerText = 'surename'
    city.innerText = 'city'
    averageMarks.innerText = "avg marks"
    studentGroups.innerText = "groups"

    listOfStudents.appendChild(theadTag)
    theadTag.appendChild(trTag)
    trTag.appendChild(id)
    trTag.appendChild(name)
    trTag.appendChild(surename)
    trTag.appendChild(city)
    trTag.appendChild(averageMarks)
    trTag.appendChild(studentGroups)


    students.forEach((doc) => {

        let tBodyTag = document.createElement('tbody')
        let trTag = document.createElement('tr')

        let studentID = document.createElement('td')
        let studentName = document.createElement('td')
        let studentSureName = document.createElement('td')
        let studentCity = document.createElement('td')
        let studentGroups = document.createElement('td')
        
        
        studentID.innerText = doc.id
        studentName.innerText = doc.name
        studentSureName.innerText = doc.surname
        studentCity.innerText = doc.city

        let studentGrades = doc.grades
        let avgStudent = studentGrades
        .map(grades => grades.value)
        .reduce((total,next)=> total + next,0) / studentGrades.length

        let avg = document.createElement('td')
        avg.innerText = avgStudent


        trTag.appendChild(studentID)
        trTag.appendChild(studentName)
        trTag.appendChild(studentSureName)
        trTag.appendChild(studentCity)
        trTag.appendChild(avg)
        trTag.appendChild(studentGroups)
        
        console.log(avgStudent)
        
        // trTag.appendChild(studentGrades)
        // console.log(avgStudent)
        
      
  
        listOfStudents.appendChild(tBodyTag)
        tBodyTag.appendChild(trTag)
    })
   

}

fetch('./data/students.json')
.then(getStudentFiles)
.then(getStudentData)
.then(displayNamesOfStudents)
