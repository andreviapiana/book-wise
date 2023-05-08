import { styled } from '@/styles/stitches.config'

export const TextInputContainer = styled('div', {
  backgroundColor: 'transparent',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray500',
  display: 'flex',
  alignItems: 'center',

  padding: '14px $5',

  width: '100%',
  height: 48,

  variants: {
    size: {
      sm: {
        maxWidth: 515,
      },
      md: {
        maxWidth: '100%',
        marginBottom: '$8',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },

  svg: {
    color: '$gray500',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',
    svg: {
      color: '$green200',
    },
  },
})

export const Children = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
