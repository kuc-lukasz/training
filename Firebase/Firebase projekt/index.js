const firebaseConfig = {
    apiKey: "AIzaSyDmvM4DB62CW24nFhbuOfFQ-Tn2mW3h2mk",
    authDomain: "todo-firebase-82b06.firebaseapp.com",
    projectId: "todo-firebase-82b06",
    storageBucket: "todo-firebase-82b06.appspot.com",
    messagingSenderId: "797185333613",
    appId: "1:797185333613:web:0e46b7117d4d58d7c26264"
  };

  firebase.initializeApp(firebaseConfig)
  
  db = firebase.firestore()

