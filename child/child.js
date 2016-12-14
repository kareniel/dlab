console.log(`I'm a real child process :D`)

let age = 0

setInterval(() => {
  console.log(`${process.pid}: I'm ${age}/3s old.`)
  age++
}, 3000)