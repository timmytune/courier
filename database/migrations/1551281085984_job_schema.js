'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.string('senderAddress', 200).notNullable()
      table.string('deliveryAddress', 200).notNullable()
      table.string('senderPhone', 200).notNullable()
      table.string('deliveryPhone', 200).notNullable()
      table.string('senderLng',20).notNullable()
      table.string('senderLat',20).notNullable()
      table.string('deliveryLng',20).notNullable()
      table.string('deliveryLat',20).notNullable()
      table.datetime('pickupDate').notNullable()
      table.datetime('deliveryDate').notNullable()
      table.string('name', 80).notNullable()
      table.string('description', 300).notNullable()
      table.integer('weight').notNullable()
      table.integer('cost').notNullable()
      table.string('otherInformation', 500).nullable()
      table.integer('status').defaultTo(0)
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobSchema
