function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return 'FizzBuzz';
    } else if (numero % 3 === 0) {
      return 'Fizz';
    } else if (numero % 5 === 0) {
      return 'Buzz';
    } else {
      return numero;
    }
  }
  
  /* Ejemplo de uso:
  for (let i = 1; i <= 15; i++) {
    console.log(fizzBuzz(i));
  } **/
  module.exports = fizzBuzz;