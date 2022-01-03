const listOfStudents = document.querySelector('#listOfNumbers')
const button = document.querySelector('#button')

const theadTag = document.createElement('thead')
  const trTag = document.createElement('tr')
  const id = document.createElement('th')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    function getRandomInt(min, max) {

    return Array.from({ length: 20 }, () => Math.floor(Math.random() * (max - min)) + min)

      }

    const randomInt = getRandomInt(1,101)
    console.log(randomInt)

    const odd = randomInt.filter((e) => e % 2 === 0)
    const even = randomInt.filter((e) => e % 2 !== 0)

   console.log(odd)
   console.log(even)
 

  }
  
  )

