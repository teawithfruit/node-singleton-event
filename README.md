# node-singleton-event
A global event bus driven by a singlton event emitter class. Use this module to hook something in other objects.

## Install
```
npm install node-singleton-event -save
```

## How to use
Require it in every file where you want to communicate with another file.

Say something:
```
var singletonevent = require('singleton-event');
singletonevent.emit('talk', 'hello world');
```

Receive something:
```
var singletonevent = require('singleton-event');
singletonevent.on('talk', function(value) {
  console.log(value);
});
```
