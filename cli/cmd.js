const fs = require('fs')
const print = require('./print')

const json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const version = json.version

module.exports = function cmd (name) {
  return new Command(name)
}

function Command (name) {
  this._value = this._commands(name)
}

Command.prototype._commands = function (name) {
  const available = [{
    name: 'help',
    helpMsg:
      `
      dlab, version ${version}

      These are common dlab commands. Type 'help' to see this list.
      Use 'help <command>' to read about a specific subcommand.

      \t help \t Display this help message
      `,
    cb: cmd => cmd
      ? print(this._commands(cmd).helpMsg)
      : print(this._value.helpMsg)
  }]

  const found = available.find(a => a.name === name)
  const fallback = {
      helpMsg: 'Command does not exist.',
      cb: () => print('Command not found.')
    }

  return found
    ? found
    : fallback
}

Command.prototype.exec = function () {
  this._value.cb(...arguments)
}