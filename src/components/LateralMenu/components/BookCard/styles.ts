import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  padding: '$6 $8',
  marginBottom: '$10',
  gap: '$10',
  borderRadius: '$md',

  background: '$gray700',

  transition: '.2s',

  '&>img': {
    borderRadius: '$sm',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const BookContainer = styled('div', {
  display: 'flex',

  gap: '$8',
  marginBottom: '$3',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h3: {
    fontSize: '$lg',
    lineHeight: '$short',
  },

  h4: {
    color: '$gray300',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$md',

    marginBottom: '$5',
  },
})

export const Number = styled('p', {
  color: '$gray400',
  fontSize: '$sm',
  marginTop: '$1',
})

export const Footer = styled('footer', {
  display: 'flex',

  padding: '$6 0',
  gap: '$16',
  borderTop: '1px solid $gray600',
})

export const BookNumber = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$5',

  svg: {
    color: '$green100',
  },

  h5: {
    lineHeight: '$base',
    fontSize: '$sm',
    color: '$gray300',
    fontWeight: '$regular',
  },

  span: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: '$bold',
  },
})
