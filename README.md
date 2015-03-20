# node-singleton-event
A global event bus driven by a singlton event emitter class.
If you require this module in your classes, you are able to use a global event bus.

## Install
```
npm install node-singleton-event

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
