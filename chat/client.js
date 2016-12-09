// chat

const net = require('net')
const jsonStream = require('duplex-json-stream')

const nick = process.argv[2]
const socket = jsonStream(net.connect(1337))

process.stdin.on('data', data => {
  socket.write({username: nick, message: data.toString() })
})

socket.on('data', data => {
  console.log(`${data.username}: ${data.message}`)
})