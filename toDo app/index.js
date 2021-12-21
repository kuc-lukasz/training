const task = document.querySelector('.task')
const tasks = document.querySelector('.task')
const addBtn = document.querySelector('.add-btn')
const trash = document.querySelectorAll('#trash')


function addTask () {
    const newTask = prompt('Wpisz zadanie')
    const newLi = document.createElement('li')
    const inputCheck = document.createElement('input')
    const label = document.createElement('label')
    const trash = document.createElement('button')
    
    newLi.classList.add('task')
   
    inputCheck.type = 'checkbox'
    inputCheck.id = "task-1"
    label.setAttribute('for',"task-1" )
    trash.setAttribute("id","trash")
    trash.setAttribute("class","trash")
    

    label.innerText = newTask

    newLi.appendChild(inputCheck)
    newLi.appendChild(label)
    newLi.appendChild(trash)
    

    allTask.appendChild(newLi)
}

addBtn.addEventListener('click', ()=>{
    addTask()

})

function deleteTask(){
    tasks.forEach((e)=>{
        let trash = tasks['.trash']

        trash.addEventListener('click', ()=> {
            console.log('dziala')
        })
    })

    
}




