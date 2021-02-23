// Dependencies
const path = require('path')

/**
 * Loads a controller from src/controllers
 *
 * @param {string} filename
 *
 * @return {Promise}
 */
const controller = (filename) => {
  const directory = path.resolve('src/controllers')
  return new Promise((resolve) => {
    const controller = require(`${directory}/${filename}`)
    resolve(controller.run())
  })
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
 * @param {string} masterFile
 *
 * @return {*}
 */
const commands = (masterFile = 'commands') => {
  const directory = path.resolve('src/configuration/')
  const command = require(`${directory}/${masterFile}`)
  return command.execute()
}

// Export modules
module.exports = { controller, commands, model }
