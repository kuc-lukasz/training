const dataWindow = document.querySelector('#data-window')
const url = ('http://localhost:3000/tasks/')
let userNumber = 1

const data = {"id": "3", "title": "fuck yeah", "isDone": "true"}


fetch('http://localhost:3000/tasks', {
    method: "POST", 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then((response)=>{
    return response.json()
}).then((data) =>{
    console.log(data)
    


}).catch((data)=> {
    console.log('nie działa')
})