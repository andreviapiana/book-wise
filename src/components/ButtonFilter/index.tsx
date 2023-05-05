import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  selected?: boolean
}

export function ButtonFilter({ title, selected, ...rest }: ButtonProps) {
  return (
    <ButtonContainer selected={selected} {...rest}>
      {title}
    </ButtonContainer>
  )
}
