/*
 * capitulo_7/util.js
 */

var assert = require('assert');
var util = require('../util');

suite('arraySum', function() {
  test('should sum the array [1,2,3]', function() {
    var sum = util.arraySum([1,2,3]);
    assert.equal(sum, 6);
  });
  test('should sum the array [1,5,6,30]', function() {
    var sum = util.arraySum([1,5,6,30]);
    assert.equal(sum, 42);
  });
  test('should sum the array [7,0,0,0]', function() {
    var sum = util.arraySum([7,0,0,0]);
    assert.equal(sum, 7);
  });
  test('should sum the array [-1,-2]', function() {
    var sum = util.arraySum([-1,-2]);
    assert.equal(sum, -3);
  });
});
