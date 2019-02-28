'use strict'

class finishJob {
  get rules () {
    return {
      date: 'required|date',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = finishJob
