const fizzBuzz = require('../fizzBuzz');

test('Divisible por 3 y no por 5: debe devolver "Fizz"', () => {
  expect(fizzBuzz(9)).toBe('Fizz');
});