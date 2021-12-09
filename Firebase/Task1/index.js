
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAWJk317ehtYz0lXzA4CY5O-L-TIn2s4Xg",
   authDomain: "infoshare-homework.firebaseapp.com",
   projectId: "infoshare-homework",
   storageBucket: "infoshare-homework.appspot.com",
   messagingSenderId: "318448819291",
   appId: "1:318448819291:web:b4b3d6b4b5379cb15d737e"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore()

const inputField = document.querySelector('#task-name')
const form = document.querySelector('#add-task-form')
const confirmBtn = document.querySelector('#confirm-btn')
const listOfTasks = document.querySelector('#list-of-tasks')


function addTasktoList (doc) {
    let newLi = document.createElement('li')
    let newTask = document.createElement('p')
    newTask.innerText = doc.data().Task

    let deleteBtn = document.createElement('button')
    newTask.style.display = "inline-block"
    deleteBtn.innerText = "usuń"
    deleteBtn.style.marginLeft = "20px"

    newLi.setAttribute('data-id', doc.id)
    newLi.appendChild(newTask)
    newLi.appendChild(deleteBtn)
    
    listOfTasks.appendChild(newLi)

    inputField.value = ""
    console.log(newTask)

    
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        newLi.remove()
    })
}
   

form.addEventListener('submit', (e) =>{
e.preventDefault()
db.collection('TasksToDo').add({
    Task: inputField.value
})
addTasktoList()

})

db.collection('TasksToDo').onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        addTasktoList(doc)
    })
})

