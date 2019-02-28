'use strict'

class GetCost {
  get rules () {
    return {
      deliveryAddress: 'required',
      senderAddress: 'required',
      weight: 'required|integer',
    }
  }

  get validateAll () {
    return true
  }

}

module.exports = GetCost
