const signUpForm = document.getElementById("signUp-form");
const signUpBtn = document.getElementById('reg-btn')
const listOfTasks = document.getElementById('list-of-tasks')

const firebaseConfig = {
  apiKey: "AIzaSyAWJk317ehtYz0lXzA4CY5O-L-TIn2s4Xg",
  authDomain: "infoshare-homework.firebaseapp.com",
  projectId: "infoshare-homework",
  storageBucket: "infoshare-homework.appspot.com",
  messagingSenderId: "318448819291",
  appId: "1:318448819291:web:b4b3d6b4b5379cb15d737e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault()
signIn();
});

function addToDo() {
  const addToDoBtn = document.getElementById("confirm-btn");
  const inputToDo = document.getElementById("toDo-input");
  const toDoTask = inputToDo.value;
  console.log(toDoTask);

  db.collection("toDo-Infoshare").add({
    Task: toDoTask,
  });
  toDoTask.value = "";
}

db.collection("toDo-Infoshare").onSnapshot((snapshot) => {
  const toDoList = document.getElementById("toDo-list");
  toDoList.innerText = "";
  snapshot.forEach((doc) => {
    const toDoNode = document.createElement("li");
    toDoNode.innerText = doc.data().Task;
    toDoList.appendChild(toDoNode);
  });
});

function signUp() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((userCredential) => {
  var user = userCredential.user;
  console.log("dziękuję za zarejestrowanie się, Twój email to: " + email);
  })
  .catch(error => console.error("Nie udało się zarejestrować"));
}

function signIn() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
  var user = userCredential.user;
  console.log("Zostałeś zalogowany na adres: " + email);
  signUpForm.style.display = "none"
  signUpBtn.style.display = "none"
  listOfTasks.style.display = "block"

  })
  .catch((error) => console.error("Nie udało się zalogować"));
}

function signOut(){

  firebase.auth().signOut()
  .then(() => {
    console.log('Zostałeś wylogowany!');
    signUpForm.style.display = "block"
    signUpBtn.style.display = "block"
    listOfTasks.style.display = "none"
    }).catch((error) => {
    console.error(error.message)
    });
}

// reagowanie na uzytkownika 
firebase.auth().onAuthStateChanged(user => {
  const emailField = document.getElementById('email-info')

  if (user) {
    emailField.textContent = "Witaj: " + user.email
  // User is signed in.
  } else {
    emailField.textContent = "No user"
  // No user is signed in.
  }
  });

  function logInGoogle (){
    const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then(result => console.log(result.credential.user))
  .catch(error => {
  console.error(error.message)
  });
  }
  