'use strict'

class RegisterUser {
  get rules () {
    return {
      email: 'required|email|unique:users',
      phone: 'required|number|unique:users',
      username:  'required|string',
      password: 'required'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = RegisterUser
