let x = ''




setStatus('Loading...')
let myPromise = new Promise ((resolve, rejected) => {

    setTimeout(() => {
        const randomInt = 2
        if(randomInt >= 5){
            resolve('wyższa')
        }else {
            rejected('jest mniejsza, nie działa!')
        }
    }, 1000)

}).then((value)=> {
    setStatus('Działa')
    setResult(value)
    
}).catch((value) => {
    setStatus('Error!!!')
    setResult(value)
})

 function setResult(value) {
      document.querySelector('.result').innerHTML = value
 }

 function setStatus(newStatus) {
    document.querySelector('.status').innerHTML = newStatus
}