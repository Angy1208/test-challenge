//Bases ADN "CTAG"
function filtrarAdn(cadenaADN) {
    // Verificar si la cadena de ADN está vacía
    if (cadenaADN === '') {
      return '';
    }
    // Filtrar las bases canónicas (C, T, A, G)
    const basesCanonicas = 'CTAG';
    const cadenaFiltrada = cadenaADN
      .split('')
      .filter(base => basesCanonicas.includes(base))
      .join('');
  
    return cadenaFiltrada;
  }
  
  // Ejemplo de uso:
  const AdnEjemplo = 'CTAGGGTA';
  const resultadoFiltrado = filtrarAdn(cadenaEjemplo);
  
  console.log(`Cadena original: ${AdnEjemplo}`);
  console.log(`Cadena filtrada: ${resultadoFiltrado}`);