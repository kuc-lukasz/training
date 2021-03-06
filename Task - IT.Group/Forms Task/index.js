const bookList = document.querySelector('#bookList')
const form = document.querySelector('#form')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const prioritypriority = document.querySelector('#priority')
const category = document.querySelector('#category')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let tr = document.createElement('tr');
//     let tbody = document.createElement('tbody');

//     let titleTd = document.createElement('td')
//     titleTd.classList.add('about-book')
//     let auhorTd = document.createElement('td');
//     auhorTd.classList.add('about-book')
//     let priorityTd = document.createElement('td')
//     priorityTd.classList.add('about-book')
//     let categoryTd = document.createElement('td')
//     categoryTd.classList.add('about-book')
    


//     titleTd.innerText = title.value
//     auhorTd.innerText = author.value
//     priorityTd.innerText = priority.value
//     categoryTd.innerText = category.value

//     tr.appendChild(titleTd)
//     tr.appendChild(auhorTd)
//     tr.appendChild(priorityTd)
//     tr.appendChild(categoryTd)

//     tbody.appendChild(tr)
//     bookList.appendChild(tbody)

//     form.reset()
// })

// function saveToLS (user){
//     let userAsString = JSON.stringify(user)
//     window.localStorage.setItem(user.title, userAsString)
// }

// function getfromLS (userFromLS) {
//     const newUser = window.localStorage.getItem('title')
//    return JSON.parse(newUser)
// }

function getDatafromLocalStorage () {
    Object.keys(localStorage).forEach(function(key){
     usersFromLS = JSON.parse(localStorage.getItem(key))
     
         const tbody = document.createElement('tbody');
         const tr = document.createElement('tr');

         let titleTd = document.createElement('td')
         titleTd.classList.add('about-book')
         let auhorTd = document.createElement('td');
         auhorTd.classList.add('about-book')
         let priorityTd = document.createElement('td')
         priorityTd.classList.add('about-book')
         let categoryTd = document.createElement('td')
         categoryTd.classList.add('about-book')
     
         titleTd.innerText = usersFromLS.title
         auhorTd.innerText = usersFromLS.author
         priorityTd.innerText = usersFromLS.priority
         categoryTd.innerText = usersFromLS.category
     
         tr.appendChild(titleTd)
         tr.appendChild(auhorTd)
         tr.appendChild(priorityTd)
         tr.appendChild(categoryTd)

         tbody.appendChild(tr)

         bookList.appendChild(tbody)
      }) 
 }

 getDatafromLocalStorage()


form.addEventListener('submit', (e) => {
    e.preventDefault()
    bookList.innerHTML = ""

    let user = {
        id: +new Date(),
        title: title.value,
        author: author.value,
        priority: priority.value, 
        category: category.value,
    }

    window.localStorage.setItem(user.id, JSON.stringify(user))

    getDatafromLocalStorage()
    form.reset()
})








 





