const addTwo = require('./module').addTwo
const addTen = require('./module').addTen

const {addTen, addTwo } = require('./module')


console.log(addTwo(2))
console.log(addTen(2))
