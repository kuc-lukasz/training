const task = document.querySelector('.task')
const allTask = document.querySelectorAll('.task')
const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', ()=>{
    console.log('dziala')
})

allTask.forEach((task)=>{
    const trash = task.querySelector('.trash')

    function removeTasks (){
        task.remove()
    }

    trash.addEventListener('click', removeTasks)
})

