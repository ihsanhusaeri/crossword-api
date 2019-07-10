'use strict'
const User = use('App/Models/User')
class UserController {
    async index ({response}) {
        let users = await User.all()
        return response.json(users)
        
    }
    async store ({request, response}) {
        const userInfo = request.only(['username', 'email', 'password'])
        const user = new User()
        user.username = userInfo.username
        user.email = userInfo.email
        user.password = userInfo.password
        await user.save()
        return response.status(201).json(user)
    }
    async show ({params, response}) {
        // const user = await User.find(params.id)
        // if (!user) {
        //     return response.status(404).json({data: 'Resource not found'})
        //     }
        // return response.json(user)
        
        
        /*GET USER, CROSSWORD AND USER_CROSSWORD BY USER_ID*/


        const userCrossword = await User.query().where('id', params.id).with('crosswords').fetch()
        if(!userCrossword){
            return response.status(404).json({user:'User tidak ditemukan'})
        }else{
            return response.status(201).json({user: userCrossword})
        }

        /* GET CROSSWORD AND USER_CROSSWORD BY USER_ID*/

        // const user = await User.find(params.id)
        // const userCrossword = await user.crosswords().fetch()

        // return{
        //     userCrossword: userCrossword
        // }
        
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
