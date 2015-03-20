module.exports = function(){

  var events = require('events');
  var EventEmitter = events.EventEmitter;

  var emitter = function() {
    if(arguments.callee._singletonInstance) {
      return arguments.callee._singletonInstance;
    }

    arguments.callee._singletonInstance = this;  
    EventEmitter.call(this);
  };
  
  emitter.prototype.__proto__ = EventEmitter.prototype;

  return new emitter();
}();