import { keyframes, styled } from '@/styles/stitches.config'
import Link from 'next/link'

const entranceAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const Container = styled('section', {
  position: 'fixed',
  top: '0',
  left: '0',

  display: 'flex',
  justifyContent: 'flex-end',

  width: '100vw',

  zIndex: 20,

  '@media (min-width: 768px)': {
    display: 'none',
  },
})

export const MobileMenuWrapper = styled('section', {
  width: '100%',
  padding: '$12 $12 0',

  zIndex: 999,

  background: '$gray800',

  animation: `${entranceAnimation} 0.5s`,
})

export const HamburgerWrapper = styled('div', {
  position: 'fixed',
  top: '$10',
  right: '$12',

  zIndex: 9999,
})

export const NavigationWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  gap: '1rem',
  padding: '$4',
  border: '2px solid $gray600',
  borderRadius: '$lg',

  transition: '0.3s',

  background: '$gray700',

  animation: `${entranceAnimation} 0.8s`,
})

export const NavButton = styled(Link, {
  display: 'flex',
  alignItems: 'center',

  height: 42,
  marginLeft: 20,
  gap: '$3',

  color: '$gray400',

  transition: '.2s',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        position: 'relative',

        '&::before': {
          content: '',
          position: 'absolute',
          width: '4px',
          height: '24px',
          top: 'calc(50% - 24px/2)',
          left: '-20px',
          borderRadius: '$full',
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const InfosWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'none',
  border: 'none',

  fontSize: '$md',
  color: '$gray200',

  gap: '$3',

  img: {
    borderRadius: '$full',
  },
})

export const LoginButton = styled('button', {
  display: 'flex',

  background: 'none',
  border: 'none',

  color: '$gray200',

  gap: '$3',

  cursor: 'pointer',

  fontSize: '$md',
})

export const ImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 34,
  height: 34,

  borderRadius: '$full',
  background: '$gradient-vertical',
})
