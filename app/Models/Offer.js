'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Offer extends Model {
    clients(){
        return this.belongsTo('App/Models/Client')
    }
}

module.exports = Offer
