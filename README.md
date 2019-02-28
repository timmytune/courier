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

`http://127.0.0.1:3333/api/v1/register`

Request fields.

```js
 email, password, phone, username 
```

Response.

`Authenticated user with token `
