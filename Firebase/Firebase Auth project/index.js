const guideList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accoutDetails = document.querySelector('.account-details')

const setupIU = (user) => {
 


  if (user) {
    // zalaczenie dodatkowych danych o uzytkowniku. Powiazaniu ich z konkretnym ID 
    db.collection('users').doc(user.uid).get().then(doc => {
    const html = `
    <div><h6>Logged in as <h5 style="display: block; font-weight: 600; margin-top: -5px; margin-bottom: 50px;">${user.email}</h5></h6></div>
    <div><h6>About me: <h5 style="display: block; font-weight: 600; margin-top: -5px; margin-bottom: 50px;">${doc.data().bio}</h5></h6></div>
    `
    accoutDetails.innerHTML = html
    })
     //acount info 
    
    loggedInLinks.forEach(e => e.style.display = "block");
    loggedOutLinks.forEach(e => e.style.display = "none");
  } else {
    //hide account info 
    accoutDetails.innerHTML = ''
    loggedInLinks.forEach(e => e.style.display = "none");
    loggedOutLinks.forEach(e => e.style.display = "block");
  }
};

//setup guides Najpierw jest obiekt -> tablica z
const setUpGuides = (data) => {
  let html = "";

  if (data.length) {
    data.forEach((doc) => {
      const guide = doc.data();

      const li = `
  <li >
          <div class="collapsible-header teal lighten-2" style="color: #ffffff">${guide.title}</div>
          <div class="collapsible-body grey lighten-3" style="font-weight: 400; border-left: 3px double rgb(77, 182, 182); border-right: 3px double rgb(77, 182, 182)">${guide.content}</div>
  </li>
  `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = `<h5 class="center-align" style="font-weight: 800; color: teal; ">Login to view guides</h5>`;
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