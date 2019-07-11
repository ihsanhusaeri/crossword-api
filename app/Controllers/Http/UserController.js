'use strict'
const User = use('App/Models/User')
const Answer = use('App/Models/Answer')
const Crossword = use('App/Models/Crossword')
class UserController {
    async index ({response}) {
        let users = await User.all()
        return response.json(users)
        
    }
    async store ({request, response}) {
        const answers = await Answer.all()
        const crosswords = await Crossword.all()

        const userInfo = request.only(['username', 'email', 'password'])
        const user = new User()
        user.username = userInfo.username
        user.email = userInfo.email
        user.password = userInfo.password
        await user.save()

        console.log(answers)
        console.log(crosswords)
        // await user.answers().attach('')

        return response.status(201).json(user)
    }
    async show ({params, response}) {
        const user = await User.find(params.id)
        if (!user) {
            return response.status(404).json({data: 'Resource not found'})
            }
        return response.json(user)
        
        
        
        
    }


    async update ({params, request, response}) {
        const userInfo = request.only(['username', 'email', 'password'])
        const user = await User.find(params.id)
         if (!user) {
            return response.status(404).json({data: 'Resource not found'})
            }
            user.username = userInfo.username
            user.email = userInfo.email
            user.password = userInfo.password

            await user.save()
            return response.status(200).json(user)
    }
    async delete ({params, response}) {
        const user = await User.find(params.id)
        if (!user) {
        return response.status(404).json({data: 'Resource not found'})
        }
        await user.delete()
        return response.status(204).json({'messages': 'data deleted'})
        }
}

module.exports = UserController
