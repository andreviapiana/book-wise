import { keyframes, styled } from '@/styles/stitches.config'

const entranceAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const ModalWrapper = styled('div', {
  transform: 'translate(0, -50%)',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  maxWidth: '516px',

  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',

  margin: 'auto',

  backgroundColor: '$gray700',
  borderRadius: '$lg',

  padding: '$14 $18',

  animation: `${entranceAnimation} 0.5s`,

  h4: {
    marginBottom: '$6',
  },
})

export const ModalButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',

  width: '100%',
  height: 72,
  maxWidth: 372,
  padding: '$5 $6',
  borderRadius: '$md',
  border: 'none',
  gap: '$5',

  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray200',
  backgroundColor: '$gray600',

  cursor: 'pointer',

  svg: {
    color: '$purple100',
  },

  '&:hover': {
    backgroundColor: '$gray500',
    transition: 'all 0.5s ease-in-out',
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',

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
