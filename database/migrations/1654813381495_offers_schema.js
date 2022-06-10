'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OffersSchema extends Schema {
  up () {
    this.create('offers', (table) => {
      table.increments()
      table.string('job_name', 100).notNullable().unique()
      table.string('client_name', 100).references('name').inTable('clients')
      table.string('offer_area', 50).notNullable()
      table.integer('minimun_experience').notNullable()
      table.integer('minimun_salary').notNullable()
      table.integer('maximun_salary').notNullable()
      table.boolean('is_public_salary').notNullable()
      table.string('external_link', 5000).notNullable()
      table.integer('referal_reward').notNullable()
      table.text('description').notNullable()
      table.string('offer_location', 100).notNullable()
      table.string('associate_technologies', 100).notNullable()
      table.date('publication_date').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('offers')
  }
}

module.exports = OffersSchema
