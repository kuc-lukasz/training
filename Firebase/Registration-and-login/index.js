firebase.auth().createUserWithEmailAndPassword('<email>',
'<password>')
.then((userCredential) => {
var user = userCredential.user;
console.log(user);
})
.catch(error => console.error(error.message));

firebase.auth().signInWithEmailAndPassword('<email>',
'<password>')
.then((userCredential) => {
var user = userCredential.user;
console.log(user);
})
.catch((error) => {
console.error(error.message);
});

// get current user
var user = firebase.auth().currentUser;
// listen to user events
firebase.auth().onAuthStateChanged(user => {
if (user) {
// User is signed in.
} else {
// No user is signed in.
}
});

firebase.auth().signOut().then(() => {
    console.log('success');
    }).catch((error) => {
    console.error(error.message)
    });