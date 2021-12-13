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

db.collection("messages");

const m = (content) => {
  db.collection("messages")
    .add({
      content,
      // dodaje nam czas do kontentu, dzieki czemu wiadomosci sie beda sortowac 
      time: +new Date()
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // tutaj dopiero po wyslaniu wiadomosci funkcja sie aktywuje 
      get()
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

//get messages
const get = () => {
    // orderBy() sortuje po polu time
    // limit powoduje ze ograniczy wyswietlanie do 2 ostatnich wiadomosci 
    //'desc' powoduje ze dostajemy te ostatnie wiadomosci, w tym wypadku dwie ostatnie wiadomosci 

    console.clear()
    db.collection("messages").orderBy('time', 'desc').limit(5).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            console.log(textField)

        });
    });
}

const ListenToMultiple = () => {
    db.collection("messages").orderBy('time', 'desc').limit(5).onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            const data = doc.data()
            console.log(data.content);

        }
        );
     
    });

}
ListenToMultiple()
