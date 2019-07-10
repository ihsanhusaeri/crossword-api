'use strict'
const User = use('App/Models/User')
class UserAnswerController {
    async show({params, response, auth}){
        const userAnswer = await User.query().where('id', params.id).with('answers').fetch()
        if(!userAnswer){
            return response.status(404).json({user:'User tidak ditemukan'})
        }else{
            return response.status(201).json({user: userAnswer})
        }
    }
}

module.exports = UserAnswerController
