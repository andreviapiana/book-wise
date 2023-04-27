import { globalCss, keyframes } from '../styles/stitches.config'

const spin = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: 400,
  },

  '.loading': {
    margin: '1rem auto',
    animation: `${spin} 1.5s linear infinite`,
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})
