const somar = require('./somar');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});
