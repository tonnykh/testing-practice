const calculator = require('./calculator');

test('add(5, 2) is equal to 7', () => {
    expect(calculator.add(5, 2)).toBe(7);
});

test('add(0.5, 0.2) is 0.7', () => {
    expect(calculator.add(0.5, 0.2)).toBe(0.7);
  });

test('subtract(-4, 2) is -6', () => {
    expect(calculator.subtract(-4, 2)).toBe(-6);
  });

  test('divide(4, 2) is 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('multiply(-4, 2) is -8', () => {
    expect(calculator.multiply(-4, 2)).toBe(-8);
  });