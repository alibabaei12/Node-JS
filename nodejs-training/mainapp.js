var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
.option('location', {
    alias: 'l',
    type: 'string'
}).help('help').argv

if(typeof argv.l === 'string' && argv.l.length>0)
{
    weather(argv.l).then(function(currentweather){
        console.log(currentweather)
    }).catch(function(error){
        console.log(error)
    })
}else{

location().then( function (location) {

return weather(location.city)

}).then(function(currentweather){
    console.log(currentweather)
}).catch(function(error){
    console.log(error)
})
}


