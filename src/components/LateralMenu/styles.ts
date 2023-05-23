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

  zIndex: 999,
})

export const ContainerOverlay = styled('div', {
  position: 'fixed',

  width: '100vw',
  height: '100vh',
  inset: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.6)',
})

export const SideMenu = styled('section', {
  maxWidth: 660,
  width: '100vw',
  height: '100vh',
  padding: '$16 $12',

  position: 'fixed',
  right: 0,
  top: 0,

  overflow: 'auto',

  background: '$gray800',

  animation: `${entranceAnimation} 0.4s`,

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

export const Title = styled('h6', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$4',

  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray200',
})

export const CloseButton = styled('button', {
  position: 'fixed',
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

export const LoginButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',

  color: '$purple100',
  fontSize: '$md',

  background: 'none',
  border: 'none',

  cursor: 'pointer',

  '&:hover': {
    opacity: 0.85,
    transition: '0.2s',
  },
})
