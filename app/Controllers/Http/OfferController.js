'use strict'

const Offer = use('App/Models/Offer')
const Client = use('App/Models/Client')

class OfferController {
    async create({ request, auth }) {
        const offer = new Offer()
        const { job_name, client_name, offer_area, minimun_experience, minimun_salary, maximun_salary, is_public_salary, external_link, referal_reward, description, offer_location, associate_technologies, publication_date } = request.all()
        offer.job_name = job_name
        offer.client_name = client_name
        offer.offer_area = offer_area
        offer.minimun_experience = minimun_experience
        offer.minimun_salary = minimun_salary
        offer.maximun_salary = maximun_salary
        offer.is_public_salary = is_public_salary
        offer.external_link = external_link
        offer.referal_reward = referal_reward
        offer.description = description
        offer.offer_location = offer_location
        offer.associate_technologies = associate_technologies
        offer.publication_date = publication_date
        try {
            await auth.check()
            try {
                if (await Client.findBy('name', client_name) != null) {
                    await offer.save()
                    return { Success: "The offer was created" }
                }
                else {
                    return { Error: "The client doesn't exist" }
                }
            }
            catch (e) {
                return { Error: "The offer already exists" }
            }
        }
        catch (e) {
            return { Error: 'You have not the permission to create an offer' }
        }
    }

    async index() {
        const offers = await Offer.all()
        return offers
    }

    async update({ request, auth }) {
        const offer = await Offer.findBy('job_name', request.all().job_name)
        if (offer === null) {
            return { Error: "The offer doesn't exist" }
        }
        const { job_name, client_name, offer_area, minimun_experience, minimun_salary, maximun_salary, is_public_salary, external_link, referal_reward, description, offer_location, associate_technologies, publication_date } = request.all()
        offer.job_name = job_name
        offer.client_name = client_name
        offer.offer_area = offer_area
        offer.minimun_experience = minimun_experience
        offer.minimun_salary = minimun_salary
        offer.maximun_salary = maximun_salary
        offer.is_public_salary = is_public_salary
        offer.external_link = external_link
        offer.referal_reward = referal_reward
        offer.description = description
        offer.offer_location = offer_location
        offer.associate_technologies = associate_technologies
        offer.publication_date = publication_date
        try {
            await auth.check()
            try {
                if (await Client.findBy('name', client_name) != null) {
                    await offer.save()
                    return { Success: "The offer was updated" }
                }
                else {
                    return { Error: "The client doesn't exist" }
                }
            }
            catch (e) {
                return { Error: "The offer already exists" }
            }
        }
        catch (e) {
            return { Error: 'You have not the permission to update an offer' }
        }
    }

    async delete({ request, auth }) {
        const offer = await Offer.findBy('job_name', request.all().job_name)
        if (offer === null) {
            return { Error: "The offer doesn't exist" }
        }
        try {
            await auth.check()
            await offer.delete()
            return { Success: "The offer was deleted" }
        }
        catch (e) {
            return { Error: "You have not the permission to delete an offer" }
        }
    }
}

module.exports = OfferController
