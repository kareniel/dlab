const net = require('net')

module.exports = Bus

function Bus () {
  this._client = client()
}

Bus.prototype.send = function (message) {
  const msg = JSON.stringify({
    method: 'send',
    arguments: [message]
  })
  this._client.write(msg)
}

Bus.prototype.stopDeamon = function () {
  const msg = JSON.stringify({
    method: 'stop'
  })
  this._client.write(msg)
}

function client () {
  const client = net.connect('1337')

  client.on('data', buf => {
    const msg = JSON.parse(buf.toString())
    console.log(`dlab said: ${JSON.stringify(msg, null, 2)}`)
    client.end()
  })

  return client
}