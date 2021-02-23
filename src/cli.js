// Dependencies
const config = require('./configuration/application')
const { commands } = require('./utils/loader')
const program = require('commander')
const figlet = require('figlet')
const chalk = require('chalk')

// Entry point graphics
console.log(
  chalk.yellow(
    figlet.textSync(config.company, {
      horizontalLayout: config.layout.main.horizontal,
    })
  )
)

// Program information
program
  .description(config.describe)
  .version(config.version)
  .name(config.name)
  .usage(config.options)

// Run the commands bootstrap process
commands()
