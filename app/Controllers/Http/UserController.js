'use strict'

const auth = require("@adonisjs/auth")

const User = use('App/Models/User')
class UserController {
    async create({ request }) {
        const user = new User()
        const { username, email, name, surname, password } = request.all()
        user.username = username
        user.email = email
        user.name = name
        user.surname = surname
        user.password = password
        try {
            await user.save()
        }
        catch (e) {
            return { Error: "The user already exists or you don't have the permission to create a user" }
        }
        return { Success: "The user was created" }
    }

    async index() {
        const users = await User.all()
        return users
    }

    async login({ request, auth }) {
        const { username, password } = request.all()
        return auth.attempt(username, password)
    }

    async update({ request, auth }) {
        const user = await User.findBy('username', request.all().username)
        if (user === null) {
            return { Error: "The user doesn't exist" }
        }
        const { username, email, name, surname, password } = request.all()
        user.username = username
        user.email = email
        user.name = name
        user.surname = surname
        user.password = password
        try {
            await auth.check()
            await user.save()
        }
        catch (e) {
            return { Error: "The user already exists" }
        }
        return { Success: "The user was updated" }
    }

    async delete({ request, auth }) {
        const user = await User.findBy('username', request.all().username)
        if (user === null) {
            return { Error: "The user doesn't exist" }
        }
        try {
            await auth.check()
            await user.delete()
        }
        catch (e) {
            return { Error: "You don't have the permission to delete a user" }
        }
        return { Success: "The user was deleted" }
    }
}

module.exports = UserController
