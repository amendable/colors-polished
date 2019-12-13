import colorsResolver from '../src';

const colors = {
  red: '#e74c3c',
  blue: '#2980b9',
}
const resolver = colorsResolver({ colors });

test('returns correct yellow color', () => {
  expect(resolver.resolve({ key: 'color', value: 'yellow' })).toEqual({
    color: 'yellow',
  });
})

test('returns correct red color', () => {
  expect(resolver.resolve({ key: 'color', value: 'red' })).toEqual({
    color: '#e74c3c',
  });
})

test('returns correct blue color', () => {
  expect(resolver.resolve({ key: 'color', value: 'blue' })).toEqual({
    color: '#2980b9',
  });
})

test('returns correct blue darken10 color', () => {
  expect(resolver.resolve({ key: 'color', value: 'blue-darken10' })).toEqual({
    color: '#20638f',
  });
})

test('returns correct blue invert color', () => {
  expect(resolver.resolve({ key: 'color', value: 'blue-invert' })).toEqual({
    color: '#d67f46',
  });
})

test('returns correct blue lighten20 color', () => {
  expect(resolver.resolve({ key: 'color', value: 'blue-lighten20' })).toEqual({
    color: '#6ab0de',
  });
})

test('returns correct blue darken10 invert color', () => {
  expect(resolver.resolve({ key: 'color', value: 'blue-darken10-invert' })).toEqual({
    color: '#df9c70',
  });
})

test('returns corect blue invert darken10 color', () => {
  expect(resolver.resolve({ key: 'color', value: 'blue-invert-darken10' })).toEqual({
    color: '#bf652a',
  });
})
