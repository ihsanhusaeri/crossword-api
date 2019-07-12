'use strict'
const Answer = use('App/Models/Answer')
const User = use('App/Models/User')
class AnswerController {
    async index({params, response, auth}){
        try{
            let answers = await Answer.all()
            return{
                response: response.json({data: answers})
            }
        }catch(error){
            return response.status(404).json({data: 'Resource not found'})
        }
    }
    async show({params, response, view}){
        try{
            const answers = await Answer.query().where('crossword_id', params.crosswordId).with('users').fetch()
            return response.status(201).json({data:answers})
        }catch(error){
            return response.status(401).json({error})
        }
        
    }
}

module.exports = AnswerController
