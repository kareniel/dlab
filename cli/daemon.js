const spawn = require('child_process').spawn

const fs = require('fs')
const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./out.log', 'a');

module.exports = {
  start: () => {
    if (process.env.__daemon) {
      return console.log('IT WORKS')
    }
    process.env.__daemon = true
    const child = spawn(process.execPath, ['server'], {
      stdio: ['ignore', out, err],
      env: process.env,
      detached: true
    })

    child.unref()

    console.log(`
      dlab server successfully initialized (process ${child.pid})
      use 'dlab end' to stop it.
    `)

    process.exit()
  }
}