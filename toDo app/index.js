const task = document.querySelector('.task')
const trash = task.querySelector('.trash')
const allTask = document.querySelectorAll('.task')

allTask.forEach(function (task) {
    const trash = task.querySelector(".trash")
    
    
    function removeTasks (){
        task.remove()
    }

    
    trash.addEventListener('click', removeTasks)
})