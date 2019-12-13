import { darken, lighten, invert } from 'polished';

const toPercent = (val) => parseInt(val, 10) / 100;

export default [
  {
    regex: 'darken(\\d+)',
    resolve: ({ value, matches }) =>  darken(toPercent(matches[1]), value),
  },
  {
    regex: 'lighten(\\d+)',
    resolve: ({ value, matches }) => lighten(toPercent(matches[1]), value),
  },
  {
    regex: 'invert',
    resolve: ({ value, matches }) => invert(value),
  },
]
