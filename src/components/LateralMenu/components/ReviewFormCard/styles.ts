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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  padding: '$6',
  marginBottom: '$3',
  borderRadius: '$md',

  background: '$gray700',

  animation: `${entranceAnimation} 1s`,
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$6',
})

export const User = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  gap: '$4',

  img: {
    border: '1px solid $green100',
    borderRadius: '$full',
  },

  h5: {
    lineHeight: '$shorter',
    fontSize: '$md',
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  gap: '$2',

  justifyContent: 'end',
})

export const ReviewFormContainer = styled('div', {
  position: 'relative',
})

export const ReviewForm = styled('textarea', {
  width: '100%',
  height: 164,

  padding: '$3 $4',
  border: '1px solid $gray500',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',

  backgroundColor: '$gray800',
  resize: 'vertical',
  minHeight: 80,
  marginBottom: '$3',

  '&:focus': {
    outline: 0,
    borderColor: '$green200',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const CharacterCounter = styled('div', {
  position: 'absolute',
  bottom: '$6',
  right: '$4',

  color: '$gray400',
  fontSize: '$xs',
  lineHeight: '$short',
})

export const ActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',

  width: 40,
  height: 40,
  padding: '$2',
  borderRadius: '$sm',
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
