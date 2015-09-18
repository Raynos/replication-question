var util = require('util');
var EventEmitter = require('events').EventEmitter;

module.exports = Channel;

function Channel() {
    var self = this;

    EventEmitter.call(self);

    self.destinations = [];
}
util.inherits(Channel, EventEmitter);

Channel.prototype.send = function send(message) {
    var self = this;

    for (var i = 0; i < self.destinations.length; i++) {
        self.destinations[i].emit('message', message);
    }
};

Channel.prototype.pipe = function pipe(dest) {
    var self = this;

    self.destinations.push(dest);
};
