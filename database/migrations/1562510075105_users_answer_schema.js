'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersAnswerSchema extends Schema {
  up () {
    this.create('users_answers', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.integer('answer_id').notNullable().unsigned().references('id').inTable('answers')
      table.string('answer')
      table.timestamps()
    })
  }

  down () {
    this.drop('users_answers')
  }
}

module.exports = UsersAnswerSchema
