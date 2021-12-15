const cafeList = document.querySelector('#cafe-list')


const firebaseConfig = {
    apiKey: "AIzaSyDmvM4DB62CW24nFhbuOfFQ-Tn2mW3h2mk",
    authDomain: "todo-firebase-82b06.firebaseapp.com",
    projectId: "todo-firebase-82b06",
    storageBucket: "todo-firebase-82b06.appspot.com",
    messagingSenderId: "797185333613",
    appId: "1:797185333613:web:0e46b7117d4d58d7c26264"
  };

  firebase.initializeApp(firebaseConfig)
  
  // stworzenie bazy danych db=database
   db = firebase.firestore()
  db.settings({timestampsInSnapshots: true})
 
//stworzenie elementu i renderowanie cafe
function renderCafe(doc){
let li = document.createElement('li')
let name = document.createElement('span')
let city = document.createElement('span')

 li.setAttribute('data-id', doc.id)
 name.innerText = doc.data().name
 city.innerText = doc.data().city

 li.appendChild(name)
 li.appendChild(city)

 cafeList.appendChild(li)


}

db.collection('Cafes').get().then((snapshot)  => {
    snapshot.docs.forEach((doc) => {
        renderCafe(doc)
    })
})