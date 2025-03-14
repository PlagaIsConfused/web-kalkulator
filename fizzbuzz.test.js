const { fizzBuzz } = require('./fizzbuzz');

test('fizzBuzz(1) returns "1"', () => {
    expect(fizzBuzz(1)).toBe("1");
});

test('fizzBuzz(3) returns "Fizz"', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('fizzBuzz(5) returns "Buzz"', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('fizzBuzz(15) returns "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
