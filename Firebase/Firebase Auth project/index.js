// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    // kliknięcie we wszystkie elementy z klasą "modal" spowodują otworzenie konkretnego panelu. Konkretnemu modułowi dajemy id które wpisujemy następnie w w data-target w nawigacji. Dzięki temu klikając w nawigacji w dany element odrazu otworzy nam przypisany modul
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    //podobnie jak wyżej, kliknięcie w konkretny ul rozwinie nam li
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

const firebaseConfig = {
  apiKey: "AIzaSyBjOk2kgwIUxKp-P6Cj13JsriKf9zceGQY",
  authDomain: "auth-project-648e0.firebaseapp.com",
  projectId: "auth-project-648e0",
  storageBucket: "auth-project-648e0.appspot.com",
  messagingSenderId: "902673576335",
  appId: "1:902673576335:web:3807e61ef7cdb1fbe15bfa", 
};
// to inicjalizuje nasze połaczenie z bazą firebase 
firebase.initializeApp(firebaseConfig);

// inicjalizacja autoryzacji 
const auth = firebase.auth();

// inicjalizacja bazy danych 
db = firebase.firestore();
