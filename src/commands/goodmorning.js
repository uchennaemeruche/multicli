const {Command, flags} = require('@oclif/command')

class Goodmorning extends Command {
  async run() {
    const {flags} = this.parse(Goodmorning)
    const language = flags.lang || 'english'
    this.log(`Goodmorning in ${language}`)
  }
}

Goodmorning.description = `Lets's say good morning to you in your own language
...
We all like that feeling of being addressed in our own language
`

Goodmorning.flags = {
  lang: flags.string({char: 'l', description: 'your native language'}),
}

module.exports = Goodmorning

