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
 
 
  
  function addToDo () {
    const addToDoBtn = document.getElementById('confirm-btn')
     const inputToDo = document.getElementById('toDo-input')
     const toDoTask = inputToDo.value
     console.log(toDoTask)
 
  db.collection('toDo-Infoshare').add({
     Task: toDoTask
 })    
    toDoTask.value = ""
  }

  db.collection('toDo-Infoshare').onSnapshot((snapshot) => {
      const toDoList = document.getElementById('toDo-list')
      toDoList.innerText = ''
      snapshot.forEach((doc) => {
        const toDoNode = document.createElement('li')
        toDoNode.innerText = doc.data().Task
        toDoList.appendChild(toDoNode)
      })
  })
 

  