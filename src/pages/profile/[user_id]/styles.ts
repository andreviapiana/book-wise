import { keyframes, styled } from '@/styles/stitches.config'

const entranceAnimation = keyframes({
  from: {
    opacity: 0,
    translate: '100%',
  },
  to: {
    opacity: 1,
    translate: '0%',
  },
})

const entranceAnimationVertical = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0%)',
  },
})

export const Title = styled('div', {
  display: 'flex',
  alignSelf: 'normal',

  maxWidth: '100%',
  maxHeight: '100vh',

  marginBottom: '$10',
  gap: '$3',

  h2: {
    marginRight: 'auto',
  },

  a: {
    display: 'flex',
    gap: '$3',
  },

  svg: {
    color: '$green100',
  },

  '@media(max-width: 768px)': {
    marginTop: '$16',
  },
})

export const MainContainer = styled('div', {
  display: 'flex',

  gap: '$16',

  '@media(max-width: 1200px)': {
    flexDirection: 'column',
    overflow: 'overlay',
  },

  '@media(min-width: 768px)': {
    maxHeight: 'calc(100% - 30px)',
  },
})

export const CenterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100% - 30px)',
  width: '100%',

  animation: `${entranceAnimationVertical} 0.5s`,
})

export const CardsContainer = styled('div', {
  overflow: 'overlay',
})

export const RightContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignSelf: 'start',
  alignItems: 'center',

  maxHeight: 'calc(100% - 30px)',
  borderLeft: '1px solid $gray700',

  p: {
    fontSize: '$xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  time: {
    fontSize: '$sm',
    lineHeight: '$short',
    color: '$gray400',
  },

  animation: `${entranceAnimation} 0.5s`,

  '@media(max-width: 1200px)': {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    border: 'none',
  },
})

export const Line = styled('div', {
  width: '32px',
  height: '4px',
  borderRadius: '$full',
  margin: '$8 auto',

  background: '$gradient-horizontal',
})

export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$3',

  span: {
    marginBottom: '$2',
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const ImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 72,
  height: 72,
  marginBottom: '$5',

  borderRadius: '$full',
  background: '$gradient-vertical',
})

export const UserStats = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  width: 308,
  padding: '$5 $14',
})

export const UserNumber = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },

  h5: {
    lineHeight: '$base',
    fontSize: '$md',
    color: '$gray200',
  },

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})
