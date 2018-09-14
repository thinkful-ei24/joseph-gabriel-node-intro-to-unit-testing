const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  // test the normal case
  // divisible by 15
  // divisible by 5
  // divisible by 3
  // regular num
  // it('should return fizz/fizzbuzz/buzz/or number for numeric inputs', function() {
  //   const normalCases = [1, 3, 5, 15, 30];

  //   normalCases.forEach(function(input) {
  //     const result = fizzBuzzer(input);
  //     expect(result);
  //   });
  // });
  it('should return fizzbuzz', function() {
    const fizzBuzzCases = [
      { input: 15, expected: 'fizz-buzz' },
      { input: 30, expected: 'fizz-buzz' },
      { input: 45, expected: 'fizz-buzz' }
    ];

    fizzBuzzCases.forEach(function(input) {
      const result = fizzBuzzer(input.input);
      expect(result).to.equal(input.expected);
    });
  });
  it('should return buzz', function() {
    const buzzCases = [
      { input: 5, expected: 'buzz' },
      { input: 10, expected: 'buzz' }
    ];

    buzzCases.forEach(function(input) {
      const result = fizzBuzzer(input.input);
      expect(result).to.equal(input.expected);
    });
  });
  it('should return fizz', function() {
    const fizz = [
      { input: 5, expected: 'buzz' },
      { input: 10, expected: 'buzz' }
    ];

    fizz.forEach(function(input) {
      const result = fizzBuzzer(input.input);
      expect(result).to.equal(input.expected);
    });
  });
  it('should return number', function() {
    const number = [{ input: 1, expected: 1 }, { input: 2, expected: 2 }];

    number.forEach(function(input) {
      const result = fizzBuzzer(input.input);
      expect(result).to.equal(input.expected);
    });
  });

  // test the edge case
  // not a number
  it('should raise an error if not passed a number', function() {
    const badInputs = ['a', 'b'];

    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
