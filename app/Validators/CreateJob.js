'use strict'

class CreateJob {
  get rules () {
    return {
      deliveryAddress: 'required',
      senderAddress: 'required',
      weight: 'required|integer',
      senderPhone: 'required|number',
      deliveryPhone: 'required|number',
      pickupDate: 'required|date',
      name: 'required|string',
      description: 'required|string',
      otherInformation: 'required|string'


    }
  }

  get validateAll () {
    return true
  }
}

module.exports = CreateJob
