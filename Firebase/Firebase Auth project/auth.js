//Sign up
const formSignUp = document.querySelector('#signup-form')

formSignUp.addEventListener('submit', (e) => {
    e.preventDefault()

    //pobranie danych z inputow
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    //zarejestrowanie danych w bazie firebase 
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        console.log(userCredential)

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        formSignUp.reset()

    })
     
     
})