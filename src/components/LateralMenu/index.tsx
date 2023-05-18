import { X } from 'phosphor-react'
import { BookCard } from './components/BookCard'
import { RatingCard } from './components/RatingCard'
import { CloseButton, Container, SideMenu, Title } from './styles'

interface BookReviewsSidebarProps {
  handleCloseMenu(): void
}

export function LateralMenu({ handleCloseMenu }: BookReviewsSidebarProps) {
  return (
    <Container onClick={handleCloseMenu}>
      <CloseButton
        title="Fechar menu lateral"
        type="button"
        onClick={handleCloseMenu}
      >
        <X size={24} />
      </CloseButton>
      <SideMenu>
        <BookCard />
        <Title>
          <span>Avaliações</span>
          <a href="">Avaliar</a>
        </Title>
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </SideMenu>
    </Container>
  )
}
