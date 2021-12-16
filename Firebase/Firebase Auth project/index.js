const guideList = document.querySelector(".guides");

//setup guides Najpierw jest obiekt -> tablica z
const setUpGuides = (data) => {
  let html = "";

  if (data.length) {
    data.forEach((doc) => {
      const guide = doc.data();

      const li = `
  <li>
          <div class="collapsible-header grey lighten-4">${guide.title}</div>
          <div class="collapsible-body white">${guide.content}</div>
  </li>
  `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = `<h5 class="center-align">Login to view guides</h5>`
  }
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  // kliknięcie we wszystkie elementy z klasą "modal" spowodują otworzenie konkretnego panelu. Konkretnemu modułowi dajemy id które wpisujemy następnie w w data-target w nawigacji. Dzięki temu klikając w nawigacji w dany element odrazu otworzy nam przypisany modul
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  //podobnie jak wyżej, kliknięcie w konkretny ul rozwinie nam li
  var items = document.querySelectorAll(".collapsible");
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
