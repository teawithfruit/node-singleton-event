# node-singleton-event

[![Join the chat at https://gitter.im/teawithfruit/node-singleton-event](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/teawithfruit/node-singleton-event?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A global event bus driven by a singlton event emitter class. Use this module to hook something in other objects.

## Install
```
npm install node-singleton-event -save
```

## How to use
Require it in every file where you want to communicate with another file.

Say something:
```
var singletonevent = require('node-singleton-event');
singletonevent.emit('talk', 'hello world');
```

Receive something:
```
var singletonevent = require('node-singleton-event');
singletonevent.on('talk', function(value) {
  console.log(value);
});
```
