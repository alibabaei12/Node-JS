var request = require('request');

module.exports = function(location){
    return new Promise(function(resolve, reject) {
        var el=encodeURIComponent(location)
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=122a43e3c7b18e474b96af4ac4af9bbe&units=imperial`;
request({
    url: url,
    json: true
},  function (error, response, body) {

    if(error) {
        reject('Unable to fetch weather.');
    
    }else {
        resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
    }
})
    })
}