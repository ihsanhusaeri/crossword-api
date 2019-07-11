'use strict'
const Database = use('Database')
class UserCrosswordController {
    async update({request, response, auth}){
        const userId = request.input('userId')
        const crosswordId = request.input('crosswordId')
        const isFinished = request.input('isFinished')

        const update = await Database.table('users_crosswords')
                        .where('user_id', userId)
                        .andWhere('crossword_id', crosswordId)
                        .update('is_finished', isFinished)
        
    }
}

module.exports = UserCrosswordController
