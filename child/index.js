const List = require('./servers')
const servers = new List()
console.log(servers)


process.stdout.write(`
  Welcome to dlab.

  start, list, help, exit

`)

process.stdin.on('data', data => {
  const str = data.toString().trim().split(' ')
  const command = str[0]
  const args = str.slice(1)

  switch (command) {
    case 'start':
      servers.add(args[0])
      break
    case 'list':
      process.stdout.write(servers.map(s => s.name).join(', ')+'\n')
      break
    case 'exit':
      process.exit()
      break
    default:
      process.stdout.write('command unknown.\n')
      break
  }
})
