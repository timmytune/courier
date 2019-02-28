'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {


 /* 
    Login and get token
    Request: email, password
    Respose: Authenticated user with token 
    */

Route.post('login', 'UserController.login')
    .middleware('guest')
    .validator('loginUser')

     /* 
    Register and get token
    Request: email, password, phone, username 
    Respose: Authenticated user with token 
    */
Route.post('register', 'UserController.register')
    .middleware('guest')
    .validator('RegisterUser')

     /* 
    Provide two addresses and return the distances between them and the cost of transporting products
    Request: SenderAddress, deliveryAddress, weight
    Respose: rturn co-orditates of addresses, and the cost of moving products between them
    */
Route.post('getcost', 'GeoLocationController.getCost')
    .middleware('auth')
    .validator('GetCost')

     /* 
    Provide information for creating a delivery job
    Request: SenderAddress, deliveryAddress, weight, senderPhone, deliveryPhone, name, description, otherInformation
    Respose: rturn co-orditates of addresses, and the cost of moving products between them
    */
Route.post('createjob', 'GeoLocationController.createJob')
    .middleware('auth')
    .validator('CreateJob')

     /* 
    Update the status of a delivery job, this is used to determine what phase this job is in, 
    Request: status (canceled: 0, pending: 1, approved: 2, pickedup: 3, delivered: 4    )
    Respose: success message 
    */
Route.post('updatejobstatus/:id', 'GeoLocationController.updateJobStatus')
    .middleware('auth')
    .validator('updatejobstatus')

     /* 
    After a job has been completed you call this to finish it
    Request: date (date this job was finished)
    Respose: success message 
    */
Route.post('finishjob/:id', 'GeoLocationController.finishJob')
    .middleware('auth')
    .validator('finishJob')


}).prefix('api/v1')


Route.get('/',  'UserController.home')
