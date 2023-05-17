import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',

  maxWidth: '100%',
  maxHeight: 'calc(100% - 20px)',

  gap: '$16',
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

  svg: {
    color: '$green100',
  },
})

export const MainContainer = styled('div', {
  display: 'flex',
  maxHeight: 'calc(100% - 30px)',

  gap: '$16',
})

export const CenterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100% - 30px)',
  width: '100%',
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

export const FilterContainer = styled('div', {
  display: 'flex',

  maxWidth: '100%',
  marginBottom: '$12',
  gap: '$3',
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
