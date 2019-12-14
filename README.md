# Polished Colors

This is a drop-in replacement of [@amendable/colors](https://github.com/amendable/colors) that also adds support for [polished](https://polished.js.org) color transforms. You can now write `primary-darken10` and it will just work.

## Usage

All polished values that go from 0 to 1 in this resolver syntax goes from 0 to 100. So if you want to transform with `darken(0.5, 'red')` you have to write `red-darken50`.

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import colorsPolished from '@amendable/colors-polished'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      colorsPolished({ colors: { primary: '#0055ff', red: '#F5BCCF' } }),
      inlineStyles(),
    ]}
  >
    <Box color='primary-darken10' backgroundColor='red'>
      Primary color, darkened by 10 percent
    </Box>
  </AmendableProvider>
)
```

> **Note**

> You can both create your own color names or redefine existing CSS colors
(like `red`, `blue`, etc.)

## Supported props

The same props that [@amendable/colors](https://github.com/amendable/colors#supported-props) support.

## Supported [polished](https://polished.js.org) color transforms

- [`adjust-hue`](https://polished.js.org/docs/#adjusthue)
- [`complement`](https://polished.js.org/docs/#complement)
- [`darken`](https://polished.js.org/docs/#darken)
- [`desaturate`](https://polished.js.org/docs/#desaturate)
- [`grayscale`](https://polished.js.org/docs/#grayscale)
- [`invert`](https://polished.js.org/docs/#invert)
- [`lighten`](https://polished.js.org/docs/#lighten)
- [`opacify`](https://polished.js.org/docs/#opacify)
- [`saturate`](https://polished.js.org/docs/#saturate)
- [`set-hue`](https://polished.js.org/docs/#sethue)
- [`set-lightness`](https://polished.js.org/docs/#setlightness)
- [`set-saturation`](https://polished.js.org/docs/#setsaturation)
- [`shade`](https://polished.js.org/docs/#shade)
- [`tint`](https://polished.js.org/docs/#tint)
- [`transparentize`](https://polished.js.org/docs/#transparentize)

## Transform chaining

This resolver also supports transform chaining:
```js
// you can even write this if you'd like:
color='primary-opacify10-darken50-invert'
```
