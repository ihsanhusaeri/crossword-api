'use strict'
const User = use('App/Models/User')
const Database = use('Database')
class UserAnswerController {
   
    async update({request, response, auth}){
        // const {userId, answerId, answer} = request.only(['user_id', 'answer_id', 'answer'])
        // const userId = request.input('userId')
        // const answerId = request.input('answerId')
        
        // const update = await Database.table('users_answers')
        //     .where('user_id', userId)
        //     .andWhere('answer_id', answerId)
        //     .update('answer', answer)
        const userId = request.input('userId')
        const answerId = request.input('answerId')
        const answer =request.input('answer')
        const update = await Database.table('users_answers')
            .where('user_id', userId)
            .andWhere('answer_id', answerId)
            .update('answer', answer)
    }
}

module.exports = UserAnswerController
