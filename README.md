# Polished Colors

Colors converter is helpful when you want to define app-wide color theme and
reuse them easily.

## Usage

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      colors({ colors: { primary: '#0055ff', red: '#F5BCCF' } }),
      inlineStyles(),
    ]}
  >
    <Box color='primary' backgroundColor='red'>
      Primary color
    </Box>
  </AmendableProvider>
)
```

> **Note**

> You can both create your own color names or redefine existing CSS colors
(like `red`, `blue`, etc.)

## Supported props

```
color
backgroundColor
borderColor
// ...and anything else that matches /color/i
```
