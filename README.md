# A simple courier servicce built on AdonisJS

This is a simple courier service API that uses google's geolocation in the backend.  

## Setup

- Run `npm install` to install all dependencies
- Make a copy of `.env.example` rename it to `.env`
- Run `adonis key:generate` to generate the secret key
- Update the database information and also add you googlemaps api key  in the .env file
- Run `adonis migration:run` to setup the database
- Run `adonis serve --dev` to run the application


## Major endpoints

```js
    http://127.0.0.1:3333/api/v1/register
```

Create a new account

### Request fields.

`email, password, phone, username `

### Response.

`Authenticated user with token `




```js
    http://127.0.0.1:3333/api/v1/login
```

Login and get token from application

### Request fields.

`email, password `

### Response.

` Token `



```js
    http://127.0.0.1:3333/api/v1/getcost
```

Provide two addresses and return the distances between them and the cost of transporting products

(Please take note this endpoint needs authorization, you have to provide `Autorization: Bearer <token> ` header )

### Request fields.

`SenderAddress, deliveryAddress, weight`

### Response.

`return co-orditates of addresses, and the cost of moving products between them`




```js
    http://127.0.0.1:3333/api/v1/createjob
```

Provide information for creating a delivery job

(Please take note this endpoint needs authorization, you have to provide `Autorization: Bearer <token>` header )

### Request fields.

SenderAddress, deliveryAddress, weight, senderPhone, deliveryPhone, name, description, otherInformation

### Response.

`return co-orditates of addresses, and the cost of moving products between them`






```js
    http://127.0.0.1:3333/api/v1/updatejobstatus/:id
```

Update the status of a delivery job, this is used to determine what phase this job is in

(Please take note this endpoint needs authorization, you have to provide `Autorization: Bearer <token>` header )

### Request fields.

status

### Response.

`return ok message`




```js
    http://127.0.0.1:3333/api/v1/finishjob/:id
```

After a job has been completed you call this to finish it

(Please take note this endpoint needs authorization, you have to provide `Autorization: Bearer <token>` header )

### Request fields.

date (date this job was finished)

### Response.

`return ok message`

```js
   there is also a live demo of this project please visit  http://adonisjs.ideraos.com
```










