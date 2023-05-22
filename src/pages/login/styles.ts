import { keyframes, styled } from '@/styles/stitches.config'

const entranceAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const Container = styled('div', {
  maxWidth: '1196px',
  padding: '$5',
  margin: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  justifyContent: 'space-between',

  animation: `${entranceAnimation} 2s`,

  '@media(max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const Hero = styled('div', {
  maxWidth: 372,
  width: '100%',

  h2: {
    lineHeight: '$short',
    height: '34px',
    marginBottom: '2px',
  },

  h4: {
    lineHeight: '$base',
    height: '26px',
    marginBottom: '$10',
  },
})

export const ButtonsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Button = styled('button', {
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

export const Preview = styled('div', {
  overflow: 'hidden',

  '.image': {
    width: '100%',
    height: '100%',
    position: 'relative !important',
    objectFit: 'cover',
  },

  '@media(max-width: 768px)': {
    display: 'none',
  },
})

export const LogoWrapper = styled('div', {
  display: 'none',

  '@media(max-width: 768px)': {
    display: 'flex',
    marginBottom: '$14',
  },
})
