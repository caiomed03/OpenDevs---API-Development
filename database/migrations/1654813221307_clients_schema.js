'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name', 100).notNullable().unique()
      table.string('email', 100).notNullable().unique()
      table.string('logo', 5000).notNullable()
      table.string('phone', 20).notNullable()
      table.string('contact_person', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
