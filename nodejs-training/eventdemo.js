var em = require('events').EventEmitter;

var emitter= new em();

emitter.on('onswipe', function(ev){
    console.log('fan is on', ev)
    ev.handled= true;
})

emitter.on('onswipe', function(ev){
    if((ev).handled)
    {
        console.log('light is on')
    }
})


emitter.on('onshoot', function(){
    console.log('shot fired')
})

emitter.on('onshoot', function(){
    console.log('reload')
})

emitter.emit('onswipe', {handled: false})


// emitter.emit('onshoot')