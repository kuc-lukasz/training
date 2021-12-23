const firebaseConfig = {
    apiKey: "AIzaSyDB6tlsFIzBSbglHq449l37L11vM1gWaUY",
    authDomain: "fir-upload-plikow-is.firebaseapp.com",
    projectId: "fir-upload-plikow-is",
    storageBucket: "fir-upload-plikow-is.appspot.com",
    messagingSenderId: "120740873772",
    appId: "1:120740873772:web:0e0872ba31a32cf8d53389"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage()
  
  const formUpload = document.querySelector('#form')

  formUpload.addEventListener('submit', (e) => {
      e.preventDefault()

      const files = document.querySelector('input').files

    if (files.length){
        storage.ref().child(`${+new Date()}.png`).put(files[0])
        .then(console.log('zostało wysłane'))
        .catch(console.error)
    }
    
  })

  // to jest referencja, na tym pliku ciagle pracujemy 
  const listRef = storage.ref()

  // to jest dojście do plików w pod katalogu, jesli mój katalog nazywa się first folder
//   let listRef = storage.ref().child('first folder')

const listByRef = (ref = listRef) => 
ref.listAll()
  .then((response) => {
      // wyświetlanie folderów 
      response.prefixes.forEach((folderRef) => {
          console.log(folderRef.name)
        listByRef(folderRef)

      })
      // wyświetlanie plików 
      response.items.forEach((itemRef) => {
        console.log(itemRef.name)
      })
  })
  listByRef()

  listRef.child('first folder/she.png').getDownloadURL()
  .then(url => {
      console.log(url)
  })

  listRef.child('avatar.png').getDownloadURL()
  .then(url => {
      console.log(url)
    const newDiv = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', url)
   document.body.appendChild(img)

      let xhr = new XMLHttpRequest()
      xhr.responseType = "blob"

  })

  const btnDelete = document.createElement('button')
  btnDelete.innerText = "delete img"
  
  document.body.appendChild(btnDelete)

//   const ref = storage.ref('avatar.png')
//   const deleteRef = (ref) => {
//     ref.delete().then(() => {
//         console.log('usuniete')

        
//     })
//   }
  btnDelete.addEventListener('click', () => {
    listRef.child('avatar.png').delete().then(() => {
        console.log('usuniete')

        
    })
  })