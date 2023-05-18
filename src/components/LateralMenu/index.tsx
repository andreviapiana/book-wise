import { X } from 'phosphor-react'
import { BookCard } from './components/BookCard'
import { RatingCard } from './components/RatingCard'
import { CloseButton, Container, SideMenu, Title } from './styles'
import { BookWithRatingAndCategories } from '@/pages/explore/index.page'

interface BookReviewsSidebarProps {
  handleCloseMenu(): void
  book: BookWithRatingAndCategories
}

export function LateralMenu({
  handleCloseMenu,
  book,
}: BookReviewsSidebarProps) {
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
        <BookCard book={book} />
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
