import { MobileMenu } from '@/components/MobileMenu'
import Sidebar from '@/components/Sidebar'
import { ReactNode } from 'react'
import { Container } from './styles'

export default function Template({
  children, // will be a page or nested layout
}: {
  children: ReactNode
}) {
  return (
    <Container>
      <Sidebar />
      <MobileMenu />
      <main>{children}</main>
    </Container>
  )
}
