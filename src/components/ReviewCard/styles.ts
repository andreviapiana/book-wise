import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: 280,

  borderRadius: '$md',
  padding: '$6',
  gap: '$8',
  marginBottom: '$3',

  backgroundColor: '$gray700',

  border: '2px solid $gray700',

  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
  },
})

export const CardHeader = styled('div', {
  display: 'flex',

  height: '100%',

  gap: '$5',

  'div:nth-child(3)': {
    marginLeft: 'auto',
  },
})

export const InfosWrapper = styled('div', {
  display: 'flex',

  height: '100%',

  gap: '$5',
})

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: '100%',

  time: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  p: {
    maxHeight: 88,

    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',

    marginTop: '$4',

    overflow: 'overlay',
  },
})

export const ImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 42,
  height: 42,

  borderRadius: '$full',
  background: '$gradient-vertical',
})
