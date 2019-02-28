'use strict'


class updateJobStatus {
    
  get rules () {
    return {
      status: 'required|integer',
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = updateJobStatus
