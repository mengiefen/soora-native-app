import { width, height } from '../../utils/dimension';

test('width should be greater than 0', () => {
  expect(width).toBeGreaterThan(0);
});

test('height should be greater than 0', () => {
  expect(height).toBeGreaterThan(0);
});
