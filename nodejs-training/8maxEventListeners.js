var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();


var listenerCalled = 0;
emitter.setMaxListeners(100);
function someCallback(){
    //Add listener
   
    emitter.on('foo', function() { listenerCalled++});

    //return from callback
   
}

for(var i = 0; i < 90 ; i++)
{
    someCallback();
}

emitter.emit('foo');
console.log('listeners called: ', listenerCalled)