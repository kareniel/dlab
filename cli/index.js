const cmd = require('./cmd')
const print = require('./print')

const args = process.argv.slice(2)
const name = args[0]
const params = args.slice(1)

const called = cmd(name)

called.exec(...params)