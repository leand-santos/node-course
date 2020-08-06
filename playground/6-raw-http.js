const https = require('https')
 
const url = 'https://api.darksky.net/forecast/1e19fca121e55c2a3babfced5e4b0a9a/40,-75?units=si&lang=en'

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()