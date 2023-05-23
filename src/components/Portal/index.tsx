import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { PortalContainer } from './styles'

interface PortalProps {
  children: ReactNode
}

export const Portal = ({ children }: PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
    setMounted(true)
  }, [])

  return mounted && ref.current
    ? createPortal(<PortalContainer>{children}</PortalContainer>, ref.current)
    : null
}
