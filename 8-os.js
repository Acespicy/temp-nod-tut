const os = require('os'); 

//info about current user
const user = os.userInfo();
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
console.log(`The System Uptime is ${os.uptime() / 60} minutes`)
console.log(`The System Uptime is ${os.uptime() / 3600} hours`)

const currentOs = {
  name:os.type(), 
  release:os.release(), 
  totalMem: os.totalmem(), 
  freeMem: os.freemem()
}

console.log(currentOs)