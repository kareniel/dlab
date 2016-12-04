const cmd = require('./cmd')

const args = process.argv.slice(2)
const name = args[0]
const params = args.slice(1)

cmd(name).exec(...params)