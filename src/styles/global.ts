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

    '*::-webkit-scrollbar': {
      width: 22,
      height: 22,
      borderRadius: 9999,
    },

    '*::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },

    '*::-webkit-scrollbar-thumb': {
      width: 6,
      backgroundColor: 'transparent',
      borderRadius: 80,
      boxShadow: 'inset 0 0 0px 6px $gray500',
      border: '10px solid transparent',
    },
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: 400,
  },

  '.loading': {
    margin: '1rem auto',
    animation: `${spin} 1.5s linear infinite`,
    color: '$purple100',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})
