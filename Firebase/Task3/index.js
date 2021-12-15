const chatContainer = document.getElementById('chat-container')
let textField = document.getElementById('text-field')

const firebaseConfig = {
  apiKey: "AIzaSyA_a27uzrIRBlqjIiUe-No-9xDQHvdfI3c",
  authDomain: "chat-f9927.firebaseapp.com",
  projectId: "chat-f9927",
  storageBucket: "chat-f9927.appspot.com",
  messagingSenderId: "193262758402",
  appId: "1:193262758402:web:c2fb59c63a1f62e1ed951b",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Pobrać użytkownika z ID1 

const getUser1 = () => {
    db.collection('users').doc().get().then((doc) => {
      
      console.log(doc, doc.data())
    }).catch((e) => {
      console.log('zaloguj się')
    })

}

getUser1()

const getUsers = () => {
  db.collection('users').get().then(Snaphosts => {
    Snaphosts.docs.map((doc) => {
      console.log(doc.data().Imie)
    })
    })

}
  

getUsers()