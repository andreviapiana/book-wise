import { keyframes, styled } from '@/styles/stitches.config'

const entranceAnimation = keyframes({
  from: {
    translate: '100%',
  },
  to: {
    translate: '0%',
  },
})

export const Container = styled('section', {
  position: 'fixed',
  top: '0',
  left: '0',

  display: 'flex',
  justifyContent: 'flex-end',

  width: '100vw',
  height: '100vh',

  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
})

export const SideMenu = styled('section', {
  flex: '0 0 660px',
  padding: '$16 $12',

  overflow: 'auto',

  background: '$gray800',

  animation: `${entranceAnimation} 0.4s`,
})

export const Title = styled('h6', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$4',

  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray200',

  'a, button': {
    display: 'inline-flex',
    alignItems: 'center',

    color: '$purple100',
    fontSize: '$md',
    fontWeight: '$bold',
    textDecoration: 'none',

    '&:hover': {
      opacity: 0.85,
      transition: '0.2s',
    },
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '$5',
  right: '3rem',

  display: 'flex',

  border: 'none',
  backgroundColor: 'transparent',

  cursor: 'pointer',

  svg: {
    color: '$gray400',

    '&:hover': {
      color: '$gray300',
    },
  },
})
