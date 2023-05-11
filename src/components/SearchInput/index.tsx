import { ReactNode } from 'react'
import { Input, TextInputContainer } from './styles'

export interface SearchInputProps {
  children: ReactNode
  size?: 'sm' | 'md'
  placeholder?: string
  value?: string
  onChange: (e: any) => void
}

export const SearchInput = ({ children, size, ...rest }: SearchInputProps) => {
  return (
    <TextInputContainer size={size}>
      <Input {...rest} />
      {children}
    </TextInputContainer>
  )
}
