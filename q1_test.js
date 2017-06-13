const assert = require('chai').assert;

const squareSum = require('./q1.js');

describe('squareSum', () => {
  it('should return 0 when passed an empty array', () => {
    const sum = squareSum([]);
    assert.equal(0, sum);
  });

  it('should return the square of sums when passed an array', () => {
    const sum = squareSum([1, 2, 3, 4]);
    assert.equal(30, sum);
  });

  it('should handle an array of duplicates', () => {
    const sum = squareSum([1, 1, 1, 1]);
    assert.equal(4, sum);
  });

  it('should throw an error with invalid inputs', () => {
    assert.throws(() => squareSum(['1', '2']), /Invalid input/);
  });
});