'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('crossword_id').unsigned().references('id').inTable('crosswords')
      table.integer('number')
      table.string('question')
      table.string('answer')
      table.boolean('is_clue')
      table.string('indexes')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
