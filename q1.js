// Write a function that takes an array of integers and produces the sum of the squares of those numbers.

const squareSum = (ints = []) => {
  if (ints.find(i => !Number.isInteger(i))) {
    throw new Error(`Invalid input: [${ints}] must contain only integers`);
  }
  return ints.reduce((acc, current) => acc + current * current, 0);
};

module.exports = squareSum;