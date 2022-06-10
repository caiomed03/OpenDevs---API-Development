'use strict'
const User = use('App/Models/User')
class UserController {
    async create({ request }){
        const user = new User()
        const { username, email, name, surname, password } = request.all()
        user.username = username
        user.email = email
        user.name = name
        user.surname = surname
        user.password = password
        try{
            await user.save()
        }
        catch(e){
            return {Error:"The user already exists"}
        }
        return {Success:"The user was created"}
    }

    async index(){
        const users = await User.all()
        return users
    }

    async login({ request, auth }){
        const { username, password } = request.all()
        return auth.attempt(username, password)
    }
}

module.exports = UserController
