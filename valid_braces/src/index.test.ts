import validBraces from '.';

test('sample', () => {
  expect(validBraces('()') === true);
});

test('should fail', () => {
  expect(validBraces('[(])') === false);
});
