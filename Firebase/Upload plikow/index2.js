const firebaseConfig = {
  apiKey: "AIzaSyDB6tlsFIzBSbglHq449l37L11vM1gWaUY",
  authDomain: "fir-upload-plikow-is.firebaseapp.com",
  projectId: "fir-upload-plikow-is",
  storageBucket: "fir-upload-plikow-is.appspot.com",
  messagingSenderId: "120740873772",
  appId: "1:120740873772:web:0e0872ba31a32cf8d53389",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const ulList = document.querySelector("#ul");

const formUpload = document.querySelector("#form");

formUpload.addEventListener("submit", (e) => {
  e.preventDefault();
  const files = document.querySelector("input").files;

  if (files.length) {
    storage
      .ref()
      .child(`${+new Date()}.png`)
      .put(files)
      .then(() => {
        displayFiles();
        console.log("plik wysłao");
      })
      .catch(console.error);
  }
});

let reference = storage.ref();

const displayFiles = () => {

  reference.listAll().then((data) => {
    // data.prefixes.forEach(file => {
    //     console.log(file)
    // })
    ul.innerHTML = "";
    console.log(data.items.length)

    if(data.items.length === 0){
        const li = document.createElement('li')
        li.innerText = "Lista jest pusta"
        ul.appendChild(li)
    } 
    data.items.forEach((item) => {
      item.getDownloadURL().then((itemURL) => {

        let li = document.createElement("li");
        li.innerHTML = `<a href="${itemURL}">${item.name}</a><button id="${item.name}"> Usuń </button>`;
        ul.appendChild(li);
        document.body.appendChild(ul);
      });
    });
    ul.addEventListener('click', (e)=> {
       let x = e.currentTarget
       let y = e.target
       console.log(x,y) 
        if(e.target.tagName === 'BUTTON'){
            let button = e.target
            let path = button.id
            reference.child(path).delete().then(() => {
                console.log('usuniete')
                displayFiles()
                
            })
        }
      })
  });
 
};
displayFiles();

// const downloadFiles = () => {
//   reference
//     .child("1640251118004.png")
//     .getDownloadURL()
//     .then((url) => {
//       console.log(url);
//       let boxForImg = document.createElement("div");
//       let img = document.createElement("img");
//       img.setAttribute("src", url);

//       let btnDelete = document.createElement("button");
//       btnDelete.innerText = "delete img";

//       btnDelete.addEventListener("click", () => {
//         listRef
//           .child("avatar.png")
//           .delete()
//           .then(() => {
//             console.log("usuniete");
//           });
//       });

//       boxForImg.appendChild(img);
//       boxForImg.appendChild(btnDelete);
//       document.body.appendChild(boxForImg);
//     });
// };

