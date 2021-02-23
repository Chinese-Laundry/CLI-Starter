// Dependencies
const { controller } = require('../utils/loader')
const program = require('commander')

module.exports = {
  execute() {
    // ------------------------------------------------------------------------
    // PUT OPTIONS HERE ...
    program.option(
      '-d, --dev',
      'runs the command line using development subroutines [requires authentication]'
    )

    // ------------------------------------------------------------------------
    // PUT COMMANDS HERE ...

    // Customer list
    program
      .command('customer')
      .alias('c')
      .description('generates a new customer report')
      .action(() => {
        controller('customers')
          // Let's pass data from the controller to the promise chain!
          .then((response) => {
            console.log(response)
          })
          .then(() => {
            console.log(
              'This portion of the promise chain works too, by the way!'
            )
          })
          .catch((error) => console.error(error))
      })

    // -------------------------------------------------------------
    // DO NOT ADD COMMANDS OR OPTIONS BELOW THIS STATEMENT
    program.parse()
  },
}
