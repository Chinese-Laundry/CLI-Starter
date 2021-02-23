// Dependencies
const { Command } = require('commander')
const figlet = require('figlet')
const chalk = require('chalk')

console.log(
    chalk.yellow(
        figlet.textSync('Chinese Laundry', { horizontalLayout: 'full' })
    )
);
  
// Create a new CLI program
const program = new Command()

// Program information
program
    .description('Command line interface for chinese laundry')
    .version('1.0.0')
    .name('laundry-cli')
    .usage('[options] <command> [params]')

// Options
program
    .option('-g, --gen', 'Generate a development library using a code template')
    .option('-d, --dev', "Runs the interface using 'development-only' subroutines")

// Commands
program
    .command('log')
    .alias('l')
    .description('Dev console command')
    .action(() => {
        console.log('I worked!')
    })

// Parse
program.parse()