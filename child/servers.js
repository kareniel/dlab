const spawn = require('child_process').spawn
const crypto = require('crypto')

module.exports = ServerList

function ServerList () {

}

ServerList.prototype = []

ServerList.prototype.add = function (num) {
  num = num || 1
  for (let i = 0; i < num; i++) {
    this.push(this._new())
    console.log(this.length)
  }
}

ServerList.prototype._new = function () {
  const server = spawn(process.execPath, ['child'])
  server.name = crypto.randomBytes(4).toString('hex')
  server.stderr.on('data', data => {
    console.error(data)
  })
  return server
}