// Dependencies
const { Command } = require('commander')
const program = new Command()

// Program information
program
    .description('Command line interface for chinese laundry')
    .version('1.0.0')

// Options
program
    .option('-d, --dev', 'Development console enabled')
    .option('-p, --prod', 'Production console enabled')

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