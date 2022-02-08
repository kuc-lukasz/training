const projectsWindow = document.querySelector('.main-container-projects')
const iframe = document.querySelector('iframe')
const video = document.querySelector('video')
const blueCloseBtn = document.querySelector('.close-bottom-blue');
const singleProjectWindow = document.querySelector(".single-project-window");
const allSingleProjectWindows = document.querySelectorAll(".single-project-window");
const singleProject = document.querySelector(".single-project");
const allSingleProjects = document.querySelectorAll(".single-project");

allSingleProjects.forEach((singleProject)=>{
const oknoZprojektem = singleProject.nextElementSibling

function openWindow (){
    oknoZprojektem.classList.add('view')
}
singleProject.addEventListener('click', openWindow)
})

allSingleProjectWindows.forEach((singleProjectWindow)=>{
const closingBtn = singleProjectWindow.querySelector('.close-bottom-blue')
const iframe = singleProjectWindow.querySelector('iframe')

function closingWindow(e){
    singleProjectWindow.classList.remove('view')
    iframe.video.pause();
    video.currentTime = 0;
}
closingBtn.addEventListener('click', closingWindow)

})

