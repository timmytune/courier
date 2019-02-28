'use strict'

const User = use('App/Models/User')

class UserController {


    /* 
    Login and get token
    Request: email, password
    Respose: Authenticated user with token 
    */
    async login ({ auth, request, response }) {
    
        const { email, password } = request.all()
        
        const token = await auth.attempt(email, password)
    
        response.json({statusCode: 200, token: token})
    }



     /* 
    The default endpoint
    Request: none
    Respose: simple message 
    */
    async home ({ response }) {
        response.json({statusCode: 200, message: "Welcome to the courier!"})
    }


    

    /* 
    Register and get token
    Request: email, password, phone, username
    Respose: Authenticated user with token 
    */

    async register ({ auth, request, response }) {


        const body = request.post()

        const user = await User.create(body)

        await user.reload()

        const token = await auth.generate(user)

        response.status(200)
        
        response.json({statusCode: 200, user: user, token: token})
    }
}

module.exports = UserController
