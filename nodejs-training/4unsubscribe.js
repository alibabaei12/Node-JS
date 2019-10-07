var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

// var fooHandler = function () {
//     console.log('handler called');

//     //unsubscribe
//     emitter.removeListener('foo', fooHandler);
//     console.log('handler called after');
// };

// emitter.on('foo', fooHandler);

emitter.once('foo', function(){
    console.log("called1");
});

emitter.once('foo', function(){
    console.log("called2");
});


//emit twich
emitter.emit('foo');
emitter.emit('foo');