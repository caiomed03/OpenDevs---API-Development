'use strict'
const Client = use('App/Models/Client')
class ClientController {
    async create({ request }){
        const client = new Client()
        const { name, email, logo, phone, contact_person} = request.all()
        client.name = name
        client.email = email
        client.logo = logo
        client.phone = phone
        client.contact_person = contact_person
        try{
            await client.save()
        }
        catch(e){
            return {Error:"The client already exists"}
        }
        return {Success:"The client was created"}
    }

    async index(){
        const clients = await Client.all()
        return clients
    }
}

module.exports = ClientController
