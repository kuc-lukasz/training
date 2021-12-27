const chatContainer = document.getElementById('chat-container')
let textField = document.getElementById('text-field')
const form = document.getElementById('form')

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

db.collection("messages");

form.addEventListener('submit', (e)=> {
  e.preventDefault()

  const content = textField.value
 
    db.collection("messages")
      .add({
        content,
        // dodaje nam czas do kontentu, dzieki czemu wiadomosci sie beda sortowac 
        time: +new Date()
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // tutaj dopiero po wyslaniu wiadomosci funkcja sie aktywuje 
        // get()
        
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    
    clearField()
  
})

const clearField = ()=> {
  textField.innerHTML = " "
}



//get messages - czyli odczyt, czyli wyciąganie napisanych wiadomości 
// jest to rowniez nasluchiwanie, ale dopiero po interakcji, czyli dodaniu czegosc 
const get = () => {
// orderBy() sortuje po polu time
    // limit powoduje ze ograniczy wyswietlanie do 2 ostatnich wiadomosci 
    //'desc' powoduje ze dostajemy te ostatnie wiadomosci, w tym wypadku dwie ostatnie wiadomosci
    console.clear()
    db.collection("messages").orderBy('time', 'desc').limit(5).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            console.log(data.content)
            

        });
    });
}
 
// Reagowanie na zmiane w kazdej kolekcji na bieżąco w czasie rzeczywistym 
const ListenToMultiple = () => {
    db.collection("messages").orderBy('time', 'desc').limit(10).onSnapshot((querySnapshot) => {
      const chatContainer = document.getElementById('chat-container')
      chatContainer.innerText = ""
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            let liContent = document.createElement('li')
            liContent.innerText = data.content
            console.log(liContent)
            chatContainer.appendChild(liContent)
            
            console.log(data.content);

        }
        );
    });

}
ListenToMultiple()


// Pobrać użytkownika z ID1 

const getUser1 = () => {
    db.collection('user').doc('1').get().then((doc) => {
      console.log(dot.data())
    })

}