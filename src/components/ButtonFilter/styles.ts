import { styled } from '@/styles/stitches.config'

export const ButtonContainer = styled('button', {
  height: '34px',
  borderRadius: '$full',
  padding: '$1 $4',

  background: 'transparent',
  border: '1px solid $purple100',
  color: '$purple100',

  fontWeight: '400',
  fontSize: '$md',

  cursor: 'pointer',

  transition: '0.4s',

  '&:hover': {
    backgroundColor: '$purple200',
    color: '$gray100',
    border: '1px solid $purple100',
  },

  variants: {
    selected: {
      true: {
        border: '1px solid $purple200',
        background: '$purple200',
        color: '$gray100',
      },
    },
  },
})
