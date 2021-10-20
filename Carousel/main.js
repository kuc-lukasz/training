const leftBtn = document.querySelector('.arrow-left')
const rightBtn = document.querySelector('.arrow-right')
const liItems = document.querySelectorAll('li')

leftBtn.addEventListener('click', ()=>{

})


rightBtn.addEventListener('click', function handle (){
    const activeItem = document.querySelector('.active') //obecny element z klasa active
    const nextElement = activeItem.nextElementSibling;

   liItems.forEach((item) => {
       item.classList.remove('active')
   })


   if(!nextElement.nextElementSibling){ 
    //    liItems[0].classList.add('active')
       rightBtn.classList.add('disabled')
       rightBtn.removeEventListener('click', handle)
   } 
   activeItem.nextElementSibling.classList.add('active')

})