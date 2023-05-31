import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',

  width: '100%',
  height: 192,

  borderRadius: '$md',
  padding: '$5 $6',
  gap: '$5',
  marginBottom: '$10',

  backgroundColor: '$gray600',

  border: '2px solid $gray600',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const CardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$3',
})

export const CardInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: '100%',
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

  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',

    maxHeight: 44,
    marginTop: '$4',

    overflow: 'hidden',
  },
})

export const ImageWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 42,
  height: 42,

  borderRadius: '$full',

  background: '$gradient-vertical',
})
