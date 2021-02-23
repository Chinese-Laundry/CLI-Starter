// Dependencies
const { controller } = require('./utils/loader')
const config = require('./configuration/cli')
const { Command } = require('commander')
const figlet = require('figlet')
const chalk = require('chalk')

// Entry point graphics
console.log(
    chalk.yellow(
        figlet.textSync(config.company, { horizontalLayout: config.layout.main.horizontal })
    )
);

// Create a new CLI program
const program = new Command()

// Program information
program
    .description(config.describe)
    .version(config.version)
    .name(config.name)
    .usage(config.options)

// Options
program.option('-d, --dev', 'runs the command line using development subroutines [requires authentication]')

// Commands
program
    // Code generator
    .command('generate')
    .description('generates a new development library using a code template')
    .action(() => {
        controller('generate')
    })

program
    // Code generator
    .command('publish')
    .description('converts a generated library to production ready code')
    .action(() => {
        controller('publish')
    })

program
    // Code generator
    .command('commit')
    .description('commits a newly created development library to github')
    .action(() => {
        controller('commit')
    })

// Parse
program.parse()
