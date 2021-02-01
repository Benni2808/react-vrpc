const EventEmitter = require('events')

/**
 * The Todo class manages a single todo item
 * @param {string} text The todo text
 */
class Todo2 extends EventEmitter {
  constructor (text) {
    super()
    this._data = { text, completed: false }
  }

  /**
   * Receives todo item data
   * @return {Object} Object with 'text' and 'completed' information
   */
  getData () {
    return this._data
  }

  /**
   * Toggles the completed state of the object
   */
  toggleCompleted () {
    this._data.completed = !this._data.completed
    this.emit('update', this._data)
  }
}

module.exports = Todo2
