import { darken, lighten, invert, transparentize, opacify } from 'polished';

const toPercent = (val) => parseInt(val, 10) / 100;

const matchers = [
  {
    regex: 'darken(\\d+)',
    resolve: ({ value, matches }) => darken(toPercent(matches[1]), value),
  },
  {
    regex: 'lighten(\\d+)',
    resolve: ({ value, matches }) => lighten(toPercent(matches[1]), value),
  },
  {
    regex: 'invert',
    resolve: ({ value, matches }) => invert(value),
  },
  {
    regex: 'transparentize(\\d+)',
    resolve: ({ value, matches }) =>
      transparentize(toPercent(matches[1]), value),
  },
  {
    regex: 'opacify(\\d+)',
    resolve: ({ value, matches }) => opacify(toPercent(matches[1]), value),
  },
];

export default matchers;
