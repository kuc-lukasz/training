const firebaseConfig = {
    apiKey: "AIzaSyAzjJOOGgddDw6m0pI53rx_Lb3mNSLfjiU",
    authDomain: "infoshare-academy-app-f1b55.firebaseapp.com",
    projectId: "infoshare-academy-app-f1b55",
    storageBucket: "infoshare-academy-app-f1b55.appspot.com",
    messagingSenderId: "53039777459",
    appId: "1:53039777459:web:21cb9340fcfa09f3d912c6",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()
  //write data 
  db.collection('Students').doc('Milosz').set({
      name: "Miłosz",
      age: 27, 
      City: "Sopot górny"
  })
  
  //read data once
  db.collection('Students').doc('Milosz').get().then((doc) => {
      console.log(doc.data())
  })


  db.collection('Students').onSnapshot((snapshot)=> {
      snapshot.forEach((document) => {
          console.log(document.data())
      });
  })

// Dodawanie gdzie zostanie przydzielony losowy ID 
//   db.collection('Students').add({
//       name: "Władek",
//       age: 49, 
//       City: "Owidz"
//   }).then ((docRef) => {
//       console.log(docRef.id)
//   })




//detele data 
// db.collection('Students').doc('Milosz').delete()

db.collection('Students').doc('T6px7weA9bHFjMGry35I').onSnapshot((doc) => {
    console.log(doc.data())
})

// Nasłuchiwanie na kolekcję students 
db.collection('Students').onSnapshot((snapshot) => {
    snapshot.forEach((doc)=> {
        console.log(doc.data())
    })
})





// fetch(
//     "https://firestore.googleapis.com/v1/projects/infoshare-academy-app-f1b55/databases/(default)/documents/Students/6xNOB09l7HUSd36MP5Ry",
//     {
//       method: "PATCH", //nadpisało
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         fields: {
//           name: { stringValue: "Aga" },
//           age: { integerValue: 24 },
//           City: { stringValue: "Starogard" },
//         },
//       }),
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
//     fetch(
//     "https://firestore.googleapis.com/v1/projects/infoshare-academy-app-f1b55/databases/(default)/documents/Students",
//     {
//       method: "POST", //Stworzenie 
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         fields: {
//           name: { stringValue: "Jerzy" },
//           age: { integerValue: 64 },
//           City: { stringValue: "Wejherowo" },
//         },
//       }),
//     }
//   )
//   fetch(
//     "https://firestore.googleapis.com/v1/projects/infoshare-academy-app-f1b55/databases/(default)/documents/Students/iJ2KHopOsdp5HO0wmgzg",
//     {
//       method: "DELETE", //nadpisało
     
//     }
//   )
