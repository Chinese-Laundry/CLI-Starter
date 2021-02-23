// Dependencies
const { controller } = require('../utils/loader')
const program = require('commander')

module.exports = {
  execute() {
    // Options
    program.option(
      '-d, --dev',
      'runs the command line using development subroutines [requires authentication]'
    )

    // Commands
    program
      // Code generator
      .command('generate')
      .description('generates a new development library using a code template')
      .action(() => {
        controller('generate')
          .then(() => {
            console.log('Hey, this portion of the promise chain works!')
          })
          .then(() => {
            console.log('This promise chain works too!')
          })
      })

    // Parse
    program.parse()
  },
}
