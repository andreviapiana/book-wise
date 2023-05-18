import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',

  position: 'relative',

  alignItems: 'center',

  width: 324,

  padding: '$4 $5',

  gap: '$5',

  marginBottom: '$3',

  borderRadius: '$md',

  backgroundColor: '$gray700',

  border: '2px solid $gray700',

  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
  },
})

export const InfosWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: '100%',

  justifyContent: 'space-between',
})

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: '100%',

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const ReadNotice = styled('div', {
  display: 'flex',

  position: 'absolute',
  top: '-2px',
  right: '-2px',

  padding: '$1 $3',

  fontSize: '$xs',

  borderRadius: '0 $md 0 $sm',

  backgroundColor: '$green300',
  color: '$green100',
})
