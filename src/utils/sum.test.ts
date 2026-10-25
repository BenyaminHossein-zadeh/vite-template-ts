import { expect, test } from 'vitest';
import sum from './sum';
test('sum util with two number', () => {
  expect(sum(2, 5))?.toBe(7);
});

test('sum with one number should return the number as response', () => {
  expect(sum(3))?.toBe(3);
});
