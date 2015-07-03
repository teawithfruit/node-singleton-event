module.exports = function(){

  var util = require('util');
  var events = require('events');
  var EventEmitter = events.EventEmitter;

  var emitter = function() {
    if(arguments.callee._singletonInstance) {
      return arguments.callee._singletonInstance;
    }

    arguments.callee._singletonInstance = this;  
    EventEmitter.call(this);
  };
  
  util.inherits(emitter, EventEmitter);

  return new emitter();
}();