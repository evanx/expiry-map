
import assert from 'assert';
import ExpiryMap from '../src/ExpiryMap';

var map = new ExpiryMap({millis: 250});

map.set(1, 'one');
map.set(2, 'two');

assert(map.get(1) === 'one', 'get 1');

setTimeout(() => {
  assert(map.get(2) === 'two', 'get 2');
}, 500);
