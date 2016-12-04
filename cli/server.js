const net = require('net')

server = net.createServer(stream => {
  stream.on('data', buf => {
    const str = buf.toString()
    const msg = JSON.parse(str)

    if (msg.method === 'stop') {
      server.close()
    }

    stream.write(str)
  })
  stream.on('error', err => {
    console.error(err)
  })
})

server.listen(1337)

server.on('listening', () => {
  console.log(`[${Date.now()}]: dlab init at 1337.\n`)
})