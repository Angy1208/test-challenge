const filtrarAdn = require('../dna');

test('Eliminar bases no canónicas: debe devolver cadena filtrada', () => {
  expect(filtrarAdn('CTAGGGTAxyz123')).toBe('CTAG');
});