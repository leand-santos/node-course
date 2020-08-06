const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1e19fca121e55c2a3babfced5e4b0a9a/' + latitude + ','+ longitude +'?units=si&lang=en'
    request({ url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect', undefined)
        }else if(body.error){
            callback(body.error, undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain")
        }
    })
}

module.exports = forecast