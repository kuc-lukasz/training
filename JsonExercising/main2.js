const addNewTaskButton = document.querySelector('#add-new-task')
const taskList = document.querySelector('#tasks-list')



function newTask () {

    const newDAta = {
        "id": 12,
        "title": "learn a fetch",
        "isDone": "true"
    }

fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newDAta)
}).then((response)=> {
    return response.json()
}).then((data)=> {
    const newLi = document.createElement('li')
    newLi.innerText = data.title
    taskList.appendChild(newLi)
    
}).catch(()=>{
    console.log("something is wrong")
})

}

addNewTaskButton.addEventListener('click', newTask)