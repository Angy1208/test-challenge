function calcularFactorial(numero) {
    // Caso base: el factorial de 0 o 1 es 1
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);     // Caso recursivo: n! = n * (n-1)!
    }
  }
  
  /* Ejemplo de uso:
  const numeroEjemplo = 5;
  const resultado = calcularFactorial(numeroEjemplo);
  
  console.log(`El factorial de ${numeroEjemplo} es: ${resultado}`);
  **/
  module.exports = calcularFactorial;