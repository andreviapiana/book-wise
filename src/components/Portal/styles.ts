import { styled } from '@/styles/stitches.config'

export const PortalContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'block',

  width: '100%',
  height: '100%',
  paddingTop: '50vh',

  overflow: 'auto',

  backgroundColor: 'rgba(0,0,0,0.6)',

  zIndex: 9999,
})
