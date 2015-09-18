module.exports = DB;

function DB() {
    var self = this;

    self._values = {};
}

DB.prototype.get = function get(key) {
    var self = this;

    return self._values[key];
};

DB.prototype.set = function set(key, value) {
    var self = this;

    self._values[key] = value;
};

DB.prototype.keys = function keys() {
    var self = this;

    return Object.keys(self._values);
};
