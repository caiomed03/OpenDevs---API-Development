'use strict'
const Client = use('App/Models/Client')

class ClientController {
    async create({ request }) {
        const client = new Client()
        const { name, email, logo, phone, contact_person } = request.all()
        client.name = name
        client.email = email.toLowerCase()
        client.logo = logo
        client.phone = phone
        client.contact_person = contact_person
        try {
            await client.save()
        }
        catch (e) {
            return { Error: "The client already exists" }
        }
        return { Success: "The client was created" }
    }

    async index() {
        const clients = await Client.all()
        return clients
    }

    async update({ request }) {
        const client = await Client.findBy('name', request.all().name)
        const { name, email, logo, phone, contact_person } = request.all()
        client.name = name
        client.email = email
        client.logo = logo
        client.phone = phone
        client.contact_person = contact_person
        try {
            await client.save()
        }
        catch (e) {
            return { Error: "The client already exists" }
        }
        return { Success: "The client was updated" }
    }

    async delete({ request, auth }) {
        const client = await Client.findBy('name', request.all().name)
        if (client === null) {
            return { Error: "The client doesn't exist" }
        }
        try {
            await auth.check()
            await client.delete()
        }
        catch (e) {
            return { Error: "The client already exists" }
        }
        return { Success: "The client was deleted" }
    }
}

module.exports = ClientController
