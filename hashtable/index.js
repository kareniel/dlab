module.exports = HashTable

function HashTable () {
  this.memory = []
}

HashTable.prototype.hashKey = function (key) {
  var hash = 0
  key.split('').forEach((x, i) => {
    var code = key.charCodeAt(i)
    hash = ((hash << 5) - hash) + code | 0
  })
  return hash
}

HashTable.prototype.get = function (key) {
  var address = this.hashKey(key)
  return this.memory[address]
}

HashTable.prototype.set = function (key, value) {
  var address = this.hashKey(key)
  this.memory[address] = value
}

HashTable.prototype.remove = function (key) {
  var address = this.hashKey(key)

  if (this.memory[address]) {
    delete this.memory[address]
  }
}