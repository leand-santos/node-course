const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if(address){
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error)
            return console.log(error)
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error)
                return console.log(error)

            console.log(location)
            console.log(forecastData)
        })
    })
} else{
    console.log('Please provide an address')
}

