var assert = require("assert")
var singletonevent = require("../")

describe('Singleton Event', function() {

  describe('send and receive', function() {
    it('should return "hello world"', function() {

      var received = false;

      singletonevent.on('talk', function(value) {
        received = value;
      });
      singletonevent.emit('talk', 'hello world');

      assert.equal('hello world', received);
    })
  })

})