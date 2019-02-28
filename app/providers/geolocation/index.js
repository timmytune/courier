



class geo {
    constructor (config) {
      this.config = config
      this.client = require('@google/maps').createClient({
        key: config,
        Promise: require('q').Promise
      });
    }
  
    get () {
    return this.client
    }
  }
  
  module.exports = geo