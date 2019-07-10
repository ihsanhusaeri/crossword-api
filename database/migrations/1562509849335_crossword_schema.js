'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CrosswordSchema extends Schema {
  up () {
    this.create('crosswords', (table) => {
      table.increments()
      table.string('name')
      table.integer('total_columns')
      table.timestamps()
    })
  }

  down () {
    this.drop('crosswords')
  }
}

module.exports = CrosswordSchema
