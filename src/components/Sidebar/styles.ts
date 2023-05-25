import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const SidebarContainer = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: 232,

  borderRadius: '$lg',
  padding: '$10 $13 $6',
  marginTop: '$5',
  marginBottom: '$5',

  boxShadow: '0 0 10px 4px $gray500',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const TopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$16',
})

export const NavigationWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$4',
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
