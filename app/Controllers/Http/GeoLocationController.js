'use strict'

const User = use('App/Models/User')
const Job = use('App/Models/Job')

class GeoLocationController {
    
    /* 
    Get cost of shipping by providing the 
    sender address and delivery address
    Request: senderAddress, deliveryAddress, weight
    Respose: lng ant lat of both sender and delivery address with cost and distance
    */
   async getCost ({ auth, request, response }) {
    
        const { senderAddress, deliveryAddress, weight } = request.all()

        const ret = await this.calculator(senderAddress, deliveryAddress, weight)

        response.status(ret.status)  
        
        console.log(ret)
            
        response.json(ret)
    }


    async createJob ({ auth, request, response }) {
    
        var req  = request.all()

        const ret = await this.calculator(req.senderAddress, req.deliveryAddress, req.weight)

        if (ret.status == 200){
            
            req.senderLng = ret.senderAddress.lng
            req.senderLat = ret.senderAddress.lat
            req.deliveryLng = ret.deliveryAddress.lng
            req.deliveryLat = ret.senderAddress.lat
            req.cost = ret.cost
            const user = await auth.getUser()
            req.user_id = user.id;
            req.status = 1;


            const job = await Job.create(req)

            await job.reload()

        }

        response.status(ret.status)  
        
        console.log(ret)
            
        response.json(ret)
    }


    async updateJobStatus ({ auth, request, response, params }) {
    
        const {status}  = request.all()
        const id = params.id

        const job = await Job.findOrFail(id)

        job.status = status

        job.save()
            
        response.json({message: 'Job updated  successfully'})
    }

    async finishJob ({ auth, request, response, params }) {
    
        const {date}  = request.all()
        const id = params.id

        const job = await Job.findOrFail(id)

        job.status = 4
        job.deliveryDate = date

        job.save()
            
        response.json({message: 'Job updated  successfully'})
    }



        /* 
    Login and get token
    Request: email, password
    Respose: Authenticated user with token 
    */
   async calculator (senderAddress, deliveryAddress, weight) {
    
    
    const geo = use('Geo/Location')

    var ret = {}
    try{
        const sa = await geo.get().geocode({address: senderAddress}).asPromise()
        ret.senderAddress = sa.json.results[0].geometry.location 
    }catch(e){
        ret.senderAddress = 'Invalid address'
        ret.status = 400
    }
    
    try{
        const da = await geo.get().geocode({address: deliveryAddress}).asPromise()
        ret.deliveryAddress = da.json.results[0].geometry.location
    }catch(e){
        ret.deliveryAddress = 'invalid address'
        ret.status = 400
    }

    if(ret.status != 400) {
        ret.status = 200
        ret.distance = this.distance(ret.senderAddress.lat, ret.senderAddress.lng, ret.deliveryAddress.lat, ret.deliveryAddress.lng)
        const Env = use('Env')
        const key = Env.get('WEIGHT_COST_RATIO', 500)
        ret.cost = weight * key * ret.distance
    }


    console.log(ret)
        

    return ret
}

    distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
      
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }
}

module.exports = GeoLocationController
