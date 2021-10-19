const containerElement = document.getElementById("container");
const addBtn = document.querySelector('.btn')

// Pobierz dane z https://jsonplaceholder.typicode.com/users/1

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((response) => {
//     console.log(response)
//     // zwróć zawartość odpowiedzi
//     return response.json()
// }).then((data) => {
//     // wyświetl w konsoli zwrócone dane
//     console.log(data)
//     // stwórz element li (document.createElement)
//     const liElement = document.createElement('li')
//     // przypisz temu elementowi wewnętrzny html imię użytkownika
//     liElement.innerHTML = data.name
//     // dodaj jako dziecko elementu container
//     containerElement.appendChild(liElement)
// })


const url = 'https://jsonplaceholder.typicode.com/users/'
let usernumber = 1;

function fetchUser() {

fetch(url + usernumber)
.then((response) => {
    // zwróć zawartość odpowiedzi
    return response.json()
}).then((data) => {
    // wyświetl w konsoli zwrócone dane
    console.log(data)
    // stwórz element li (document.createElement)
    const liElement = document.createElement('li');
    // przypisz temu elementowi wewnętrzny html imię użytkownika
    liElement.innerHTML = data.name;
    // dodaj jako dziecko elementu container
    containerElement.appendChild(liElement);
    //dodawanie kolejnego usera 
    usernumber += 1
});

}


addBtn.addEventListener('click', fetchUser)









