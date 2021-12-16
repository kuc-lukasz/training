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
    auth.signOut().then(() => {

        window.alert('Zostałeś wylogowany');

        }).catch((error) => {

        console.error(error.message)
        });
    
})

// log-In

const logIn = document.querySelector('#modal-login')
logIn.addEventListener('click', (e) => {
e.preventDefault()

    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {

    var user = userCredential.user;
    console.log(user);

    }).catch((error) => { });
})