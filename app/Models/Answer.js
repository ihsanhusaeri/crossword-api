'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    crosswords () {
        return this.belongsTo('App/Models/Crossword')
    }
    users(){
        return this.belongsToMany('App/Models/User').pivotTable('users_answers').withPivot('id')
    }
}

module.exports = Answer
