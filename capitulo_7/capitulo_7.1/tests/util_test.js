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
  test('should sum the array [0,undefined]', function() {
    var sum = util.arraySum([0,undefined]);
    assert.equal(sum, 0);
  });
});

suite('guid', function() {
  test('should have a valid format', function() {
    var uuid = util.guid();
    console.log(uuid);
    assert.ok(/^[a-z|\d]{8}-[a-z|\d]{4}-[a-z|\d]{4}-[a-z|\d]{4}-[a-z|\d]{12}$/.test(uuid));
  });
  test('should generate uniques uuids', function() {
    var uuid1 = util.guid();
    var uuid2 = util.guid();
    var uuid3 = util.guid();
    var uuid4 = util.guid();

    assert.notEqual(uuid1, uuid2);
    assert.notEqual(uuid2, uuid3);
    assert.notEqual(uuid3, uuid4);
    assert.notEqual(uuid1, uuid4);
  });
});
