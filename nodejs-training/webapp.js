var request = require('request');

function getWeather (location)
{
    return new Promise(function(resolve , reject){
        var el=encodeURIComponent(location);
        var url= `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=122a43e3c7b18e474b96af4ac4af9bbe&units=imperial`;

        if(!location)
        {
            return reject('no location is found')
        }
        request({
            url:url,
            json: true

        }, function(error, response, body) {
            if(error){
                reject ('unable to fetch weather')
            }
            else {
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!')
            }
        })
    })

}
getWeather("london").then(function(currentweather) {
    console.log(currentweather)
}, function(error){
    console.log(error)
})