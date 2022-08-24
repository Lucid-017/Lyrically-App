/* we take our code from our url and convert it into an access and a refresh token which whe will use 
to authenticate the user, now because this process requires our client_secret we need to do this logic
in our server for our login Code (security reasons) */

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
let SpotifyWebApi = require('spotify-web-api-node')

const app =express()
// to treat our cors error response
app.use(cors())
// for the 500 (Internal Server Error)
app.use(bodyParser.json())
// post a simple login application
app.post('/login',(req, res)=>{
    
    const code = req.body.code //this is the code that is returned as a query parameter
    // console.log("🚀 ~ file: server.js ~ line 19 ~ app.post ~ code", code)
    // create a new instance of the SpotifyWebApi
    const spotifyApi= new SpotifyWebApi({
        // inside here we want to accomodate all our credentails
        // redirecturi,clientid,clientsecret
        redirectUri: "http://localhost:3000",
        clientId:"66bce91f242647eeade679d4477e136b",
        clientSecret:"2136d3e25a764ad29c7cf66d84e5f9d5",

    })
// retrieve an access token and a refresh token
    spotifyApi.authorizationCodeGrant(code).then(data=>{//its a promise that returns data
        res.json({
            accessToken : data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err)=>{
        console.log(err)
        //its a promise that returns errors
        res.sendStatus(400)
    })
})

// // craete another route to refresh our token 
// app.post('/refresh',(req,res)=>{
//     const refreshToken =req.body.refreshToken
//     console.log('hi')
//     // console.log("🚀 ~ file: server.js ~ line 46 ~ app.post ~ refreshToken", refreshToken)
//     const spotifyApi = new SpotifyWebApi({
//         redirectUri: "http://localhost:3000",
//         clientId:"66bce91f242647eeade679d4477e136b",
//         clientSecret:"2136d3e25a764ad29c7cf66d84e5f9d5",
//         refreshToken
//     })
//     spotifyApi.refreshAccessToken().then(
//         data=>{
//         console.log("🚀 ~ file: server.js ~ line 55 ~ app.post ~ data", data.body)
//         res.json({
//             accessToken: data.body.access_token,

//             expiresIn: data.body.expires_in
//         })
//            // save the access token
//            spotifyApi.setAccessToken(data.body['access_token'])
//         }).catch(()=>{
//             res.sendStatus(400)
//         })
// })

app.listen(3001)