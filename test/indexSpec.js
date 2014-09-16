'use strict';

describe('index.js', function() {
  var index = require('../src/index');

  it('should add two numbers', function() {
    var result = index.add(1,2);

    expect(result).toBe(3);
  });
});
