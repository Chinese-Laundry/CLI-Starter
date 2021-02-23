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
program.option('-d, --dev', 'runs the command line using development subroutines [requires authentication]')
    // .option('-s, --sup', 'runs the command line using administrative subroutines [requires authentication]')

// Commands
program
    // Code generator
    .command('generate')
    .description('generates a new development library using a code template')
    .action(() => {
        console.log('It worked, the generator subroutine was called successfully!')
    })

program
    // Code generator
    .command('publish')
    .description('converts a generated library to production ready code')
    .action(() => {
        console.log('It worked, the publishing subroutine was called successfully!')
    })

program
    // Code generator
    .command('commit')
    .description('commits a newly created development library to github')
    .action(() => {
        console.log('It worked, the code commit subroutine was called successfully!')
    })

// Parse
program.parse()