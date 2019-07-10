'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersCrosswordSchema extends Schema {
  up () {
    this.create('users_crosswords', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.integer('crossword_id').notNullable().unsigned().references('id').inTable('crosswords')
      table.boolean('is_finished')
      table.timestamps()
    })
  }

  down () {
    this.drop('users_crosswords')
  }
}

module.exports = UsersCrosswordSchema
