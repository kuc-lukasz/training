// Zadanie
// 1. Zmienna globalna promiseCount
// 2. Stwórz funkcje testPromise która dodaje 1 do licznika 
// 3. Zdefiniuj promise 
// 4. Argumentem dla resolve jest promiseCount 
// 5. Promise czeka kilka sekund Math.random() * 2000 + 5000
// 6. Uruchomienie Promise i wyświetl promise Count 


const log = document.querySelector('#log')
let promiseCount = 0

function setStatus(newStatus) {
    document.querySelector('#log').innerHTML = newStatus
}

    setStatus("Loading...")
    let thisPromiseCount = ++promiseCount
    let myPromise = new Promise((resolve, rejected)=>{
        setStatus("Loading......")
        log.insertAdjacentHTML('beforeend', `<div>Promise wystartował, numer promisu: + ${thisPromiseCount}</div>`)
        setTimeout(() => {
        resolve(++thisPromiseCount)
        rejected('Nie działa')
            
        }, Math.random() * 2000 + 2500);


    }).then((countValue) => {
       setStatus('Działa')
        log.insertAdjacentHTML('beforeend', `<div>Promise jest w stanie fullfilled, numer promisu: ${countValue} </div>`)

    }).catch((error)=>{
        window.alert(error)

    })



myPromise()

