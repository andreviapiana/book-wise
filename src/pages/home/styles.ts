import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',

  maxWidth: '100%',
  maxHeight: 'calc(100% - 20px)',

  gap: '$16',
})

export const CenterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: '0 $5 0 0',

  overflowY: 'overlay',
})

export const RightContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: '100%',
  maxHeight: '100vh',
})

export const Title = styled('div', {
  display: 'flex',
  alignSelf: 'normal',

  maxWidth: '100%',
  maxHeight: '100vh',

  marginBottom: '$10',
  gap: '$3',

  svg: {
    color: '$green100',
  },
})

export const Subtitle = styled('div', {
  display: 'flex',
  alignSelf: 'normal',
  justifyContent: 'space-between',

  maxWidth: '100%',
  maxHeight: '100vh',
  marginBottom: '$4',

  a: {
    display: 'flex',
    alignItems: 'center',

    gap: '$2',

    color: '$purple100',
    fontWeight: '$bold',

    '&:hover': {
      opacity: 0.85,
      transition: '0.2s',
    },
  },
})
