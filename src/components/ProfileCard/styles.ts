import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$2',
  padding: '0 $5 0 0',

  time: {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const Description = styled('div', {
  display: 'flex',

  fontSize: '$sm',
  color: '$gray300',
})

export const CardWrapper = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  padding: '$6',
  gap: '$6',
  marginBottom: '$6',
  borderRadius: '$md',

  border: '2px solid $gray700',

  backgroundColor: '$gray700',

  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
  },
})

export const CardInfos = styled('div', {
  display: 'flex',
  gap: '$6',
})

export const InfosWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',
  padding: '$1 0 $1 0',
})

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$lg',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const ReadNotice = styled('div', {
  display: 'flex',

  position: 'absolute',
  top: '-2px',
  right: '-2px',

  padding: '$1 $3',

  fontSize: '$xs',

  borderRadius: '0 $md 0 $sm',

  backgroundColor: '$green300',
  color: '$green100',
})
