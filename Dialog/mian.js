const pElement = document.querySelector('p')

const closeBtn = document.querySelector('.x-element')

const dialogContainer = document.querySelector('.container')

pElement.addEventListener('click', () => {
dialogContainer.classList.add('show')

})

closeBtn.addEventListener('click', () => {
    
    dialogContainer.classList.remove('show')
})

window.addEventListener('click', (e)=> {
    if(e.target === dialogContainer){
        dialogContainer.classList.remove('show')
    } 
    
} )
