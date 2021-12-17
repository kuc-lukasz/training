//sluchanie na status autoryzacji, tutaj bedziemy zawierac wszystkie reakcje zaleznie od statusu uzytkownika

auth.onAuthStateChanged((user) => {
  if (user) {
    // pobranie dokumentow z firestore
    db.collection("guides")
      .get()
      .then((snapshot) => {
        setUpGuides(snapshot.docs);
        setupIU(user)
      });
  } else {
    setUpGuides([]);
    setupIU()
  }
});

//create new guide
const createForm = document.querySelector('#create-form')

createForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector("#title");
  const content = document.querySelector('#content')

    db.collection('guides').add({
        title: title.value,
        content: content.value
    }).then (()=> {
        const modal = document.querySelector("#modal-create");
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(er => {
        console.log(er)
    })

}) 
//Sign up
const formSignUp = document.querySelector("#signup-form");

formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();

  //pobranie danych z inputow
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  const bioData = document.querySelector("#signup-bio")

  //zarejestrowanie danych w bazie firebase
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // dodanie nowej kolekcji danych przypisywanych do usera 
      return db.collection('users').doc(userCredential.user.uid).set({
        bio: bioData.value
      })
      
    }).then(() => {
      const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    formSignUp.reset();
    })
});

//Log-out
const logOut = document.querySelector("#logout");
logOut.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

// log-In
const logInForm = document.querySelector("#modal-login");

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //pobranie danych z inputow
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      formSignUp.reset();
    })
    .catch((error) => {});
});
