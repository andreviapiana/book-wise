import { X } from 'phosphor-react'
import { BookCard } from './components/BookCard'
import { RatingCard } from './components/RatingCard'
import { CloseButton, Container, SideMenu, Title } from './styles'
import { BookWithRatingAndCategories } from '@/pages/explore/index.page'
import { useEffect, useState } from 'react'
import { Rating as RatingInfo, User as UserPrisma } from '@prisma/client'
import { api } from '@/lib/axios'

interface BookReviewsSidebarProps {
  handleCloseMenu(): void
  book: BookWithRatingAndCategories
}

type RatingProps = RatingInfo & {
  user: UserPrisma
}

export function LateralMenu({
  handleCloseMenu,
  book,
}: BookReviewsSidebarProps) {
  const [ratings, setRatings] = useState<RatingProps[] | null>(null)

  useEffect(() => {
    async function loadRatings() {
      // await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await api.get(`/books/${book.id}`)
      if (response.data) {
        setRatings(response.data.book.ratings)
      }
    }
    loadRatings()
  }, [book.id])

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
        {ratings?.map((rating) => (
          <RatingCard
            key={rating.id}
            avatar={rating.user.avatar_url}
            name={rating.user.name}
            date={rating.created_at}
            rate={rating.rate}
            rating={rating}
            description={rating.description}
          />
        ))}
      </SideMenu>
    </Container>
  )
}
