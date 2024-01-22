const calcularFactorial = require('../factorial');

test('Factorial de 5 debe ser 120', () => {
    expect(calcularFactorial(5)).toBe(120);
  });