'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    offers(){
        return this.hasMany('App/Models/Offer')
    }
}

module.exports = Client
