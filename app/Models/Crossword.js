'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Crossword extends Model {
    answers(){
        return this.hasMany('App/Models/Answer')
    }
    users(){
        return this.belongsToMany('App/Models/User').pivotTable('users_crosswords').withPivot('id','is_finished')
    }
}

module.exports = Crossword
