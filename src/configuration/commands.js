// Dependencies
const { controller } = require('../utils/loader')
const program = require('commander')

module.exports = {
  execute() {
    // ------------------------------------------------------------------------
    // PUT OPTIONS HERE ...
    program.option('-d, --dev', 'runs the command line using development subroutines [requires authentication]')

    // ------------------------------------------------------------------------
    // PUT COMMANDS HERE ...

    // Code generator
    program
      .command('generate')
      .description('generates a new development library using a code template')
      .action(() => {
        controller('generate')
          .then(() => {
            console.log('Hey, this portion of the promise chain works!')
          })
          .then(() => {
            console.log('This portion of the promise chain works too!')
          })
      })

    // ------------------------------------------------------------------------
    // Code committer
    program
      .command('commit')
      .description('Commits code to a github repository')
      .action(() => {
        controller('commit')
          .then(() => {
            console.log('Hey, this portion of the promise chain works!')
          })
          .then(() => {
            console.log('This portion of the promise chain works too!')
          })
      })

    // ------------------------------------------------------------------------
    // Code publisher
    program
      .command('publish')
      .description('Pulls a github repository and advances it to production')
      .action(() => {
        controller('publish')
          .then((response) => {
            console.log(response)
          })
          .then(() => {
            console.log('This portion of the promise chain works too!')
          })
          .catch((error) => console.error(error))
      })

    // -------------------------------------------------------------
    // DO NOT ADD COMMANDS OR OPTIONS BELOW THIS STATEMENT
    program.parse()
  },
}
