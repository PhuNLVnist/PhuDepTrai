const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2b7820dd1a996ce021403959f30888af&query=21.0284,105.8537&units=f'

request({url: url, json: true}, (error, response) => {
    console.log('It is currently '+ response.body.current.temperature+' degrees out. Here is '+response.body.location.country);
})
