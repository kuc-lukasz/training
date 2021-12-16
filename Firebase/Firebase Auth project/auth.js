//sluchanie na status autoryzacji, tutaj bedziemy zawierac wszystkie reakcje zaleznie od statusu uzytkownika 

auth.onAuthStateChanged(user => {
    if(user){
        window.alert('jestes zalogowany')
    } else {
        window.alert('jestes wylogowany')
    }
})

//Sign up
const formSignUp = document.querySelector('#signup-form')

formSignUp.addEventListener('submit', (e) => {
    e.preventDefault()

    //pobranie danych z inputow
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    //zarejestrowanie danych w bazie firebase 
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        formSignUp.reset()
    })   
})

//Log-out 
const logOut = document.querySelector('#logout')
logOut.addEventListener('click', (e) => {
e.preventDefault()
    auth.signOut()
})

// log-In 
const logInForm = document.querySelector('#modal-login')

logInForm.addEventListener('submit', (e) => {
e.preventDefault()
//pobranie danych z inputow
const email = document.querySelector('#login-email').value;
const password = document.querySelector('#login-password').value;

    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        formSignUp.reset()
    }).catch((error) => { });
})