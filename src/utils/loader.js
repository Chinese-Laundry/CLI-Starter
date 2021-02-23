// Dependencies
const path = require('path')

// TODO - Make controller and model functions return a promise once the file is require()'ed
// TODO - Fixe the command loader function so it loads and executes commands using an array

/**
 * Loads a controller from src/controllers
 *
 * @param {string} filename
 *
 * @return {*}
 */
const controller = (filename) => {
    const directory = path.resolve('src/controllers')
    const controller = require(`${directory}/${filename}`)
    return controller.run()
}

/**
 * Loads a model from src/models
 *
 * @param {string} filename
 *
 * @return {*}
 */
const model = (filename) => {
    const directory = path.resolve('src/models')
    return require(`${directory}/${filename}`)
}

/**
 * Executes a command from src/commands
 *
 * @param {Array} filenames
 *
 * @return {any}
 */
const commands = (filenames) => {
    const directory = path.resolve('src/commands')
    filenames.forEach(filename => {
        const command = require(`${directory}/${filename}`)
        return command.execute()
    })
}

// Export modules
module.exports = { controller, commands, model }
