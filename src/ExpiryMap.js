

import assert from 'assert';
import Immutable from 'immutable';

export default class ExpiryMap {

    constructor(millis) {
      this.millis = millis;
      this.expiring = Immutable.Map();
      this.map = Immutable.Map();
    }

    set(key, value) {
      let expiry = new Date().getTime() + th.millis;
      this.expiring = this.expiring.set(key, expiry);
      this.map = this.map.set(key, value);
    }

    get(key) {
      let time = new Date().getTime();
      let expired = this.expiring.filter(expiry => expiry < time).keys();
      console.log('deleteIn', this.expiring.deleteIn(expired));
      //this.expiring = this.expiring.deleteIn(expired);
      //this.map.deleteIn(expired);
      //console.log('keys', this.map);
      return this.map.get(key);
    }
};
