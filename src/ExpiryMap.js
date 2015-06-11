

import assert from 'assert';
import Immutable from 'immutable';

module.exports = function(that) {
  assert(that && that.millis, 'millis');
  that.expiring = Immutable.Map();
  that.map = Immutable.Map();

  function set(key, value) {
    let expiry = new Date().getTime() + that.millis;
    that.expiring = that.expiring.set(key, expiry);
    that.map = that.map.set(key, value);
  }

  function get(key) {
    let time = new Date().getTime();
    let expired = that.expiring.filter(expiry => expiry < time).keys();
    //that.expiring = that.expiring.deleteIn(expired);
    //that.map.deleteIn(expired);
    //console.log('keys', that.map);
    return that.map.get(key);
  }

  return { set, get };
};
