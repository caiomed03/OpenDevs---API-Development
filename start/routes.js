'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/create/client', 'ClientController.create')
  Route.post('/create/offer', 'OfferController.create').middleware('auth')
  Route.post('/create/user', 'UserController.create')
  Route.get('/get/clients', 'ClientController.index')
  Route.get('/get/offers', 'OfferController.index')
  Route.get('/get/users', 'UserController.index')
  Route.delete('/delete/cliente', 'ClientController.delete')
  Route.delete('/delete/offer', 'OfferController.delete').middleware('auth')
  Route.delete('/delete/user', 'UserController.delete')
  Route.post('/login', 'UserController.login')
  Route.patch('/update/client', 'ClientController.update')
  Route.patch('/update/offer', 'OfferController.update').middleware('auth')
  Route.patch('/update/user', 'UserController.update')
}).prefix('/api/v1')
