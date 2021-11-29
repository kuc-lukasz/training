const taskList = document.querySelector('#tasks-list')

//Tworzę funkcję która dane otrzymane z servera wrzuci do DOMa

const buildTaskList = tasks => {
const taskNodes = tasks.map(task => {
    const oneTask = document.createElement('li')
    const checkboxNode = document.createElement('input')
    checkboxNode.type = 'checkbox'
    checkboxNode.checked = task.isDone
    const spanNote = document.createElement('span')
    spanNote.textContent = task.title

    checkboxNode.addEventListener('change', () => {
        fetch(`http://localhost:3000/tasks/${task.id}`), {
            method: "PATCH",
            headers: {
                'Content-Types': 'aplication/json'
            },
            body: JSON.stringify({ isDone: checkboxNode.checked })
        }
        .then()
    })

    oneTask.appendChild(checkboxNode)
    oneTask.appendChild(spanNote)

    return oneTask
})

taskNodes.forEach(task => {
    taskList.appendChild(task)
});

}

fetch('http://localhost:3000/tasks')
.then(function(response) {
    return response.json()
}).then(buildTaskList)