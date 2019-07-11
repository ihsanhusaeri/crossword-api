'use strict'
const Crossword = use('App/Models/Crossword')
const User = use('App/Models/User')
class CrosswordController {
    async index ({response, auth}) {
        try {
            const getUser = await auth.getUser()
            const user = await User.find(getUser.id)
            const crosswords = await user.crosswords().fetch()
            return response.send(crosswords)  
        } catch (error) {
            response.send("Not Found" )
        }   
    }
}

module.exports = CrosswordController