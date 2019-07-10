'use strict'
const Answer = use('App/Models/Answer')
const User = use('App/Models/User')
class AnswerController {
    async index({params, response, auth}){
        try{
            let answers = await Answer.all()
            // const answers = await Crossword.answer().fetch()
            return{
                response: response.json({data: answers})
            }
            
        }catch(error){
            return response.status(404).json({data: 'Resource not found'})
        }
       
        
        
    }
    async show({params, request, response, view}){
       /* GET ANSWER AND USER_ANSWER BY USER_ID*/ 
        // try{
        //     const user = await User.find(params.id)
        //     const answers = await user.answers().fetch()
        //     return response.send(answers)   
        // }catch(error){
        //     return response.status(404).json({message:error})
        // }

        /* GET USER, ANSWER AND USER_ANSWER BY USER_ID*/
        try{
            // const answers = await Answer.query().where('id', params.id).with('users').fetch()
            const answers = await Answer.query().where('id', params.id).fetch()
            return response.status(201).json({answers})

        }catch(error){
            return response.status(401).json({error})
        }
    }
    async showByCrossword({params, request, response}){
        try{
            // const answers = await Answer.query().where('id', params.id).with('users').fetch()
            const answers = await Answer.query().where('crossword_id', params.id).fetch()
            return response.status(201).json({answers})

        }catch(error){
            return response.status(401).json({error})
        }
    }
}

module.exports = AnswerController
