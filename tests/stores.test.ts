import { sum } from '../src/jest';
import { names } from '../src/stores';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});