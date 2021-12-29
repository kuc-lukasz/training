const system = require('os')

const coresCount = system.cpus().length
const pcInfo = `I\'m using ${system.platform()} with ${system.arch()} architecture, and my processor has ${coresCount} cores!`

console.log(pcInfo)

console.log('jebać pis')