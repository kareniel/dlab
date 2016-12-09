// chat

const net = require('net')
const streamSet = require('stream-set')
const jsonStream = require('duplex-json-stream')

const clients = streamSet()

const server = net.createServer(socket => {
  socket = jsonStream(socket)
  clients.add(socket)
  socket.on('data', data => {
    others(socket).map(s => s.write(data))
  })
})

server.listen(1337)

function others (socket) {
  const i = clients.streams.indexOf(socket)

  return [
    ...clients.streams.slice(0, i),
    ...clients.streams.slice(i + 1)
  ]
}