const calculator = require('../app/calculator');


test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 4 - 1 to equal 3', () => {
  expect(calculator.subtract(4, 1)).toBe(3);
});

test('multiply 1 * 2 to equal 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('isOdd returns true for 5', () => {
  expect(calculator.isOdd(5)).toBe(true);
});

test('isEven returns true for 6', () => {
  expect(calculator.isEven(6)).toBe(true);
});

test('divisibleBy returns true for even number',()=> {
  expect(calculator.divisibleBy(8,4)).toBe (true);
});

test('squareIt returns number timed by itself',()=> {
  expect(calculator.squareIt(3)).toBe (9);
} 

);