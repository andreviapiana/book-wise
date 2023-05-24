import { X } from 'phosphor-react'
import { BookCard } from './components/BookCard'
import { RatingCard } from './components/RatingCard'
import {
  CloseButton,
  Container,
  ContainerOverlay,
  LoginButton,
  SideMenu,
  Title,
} from './styles'
import { BookWithRatingAndCategories } from '@/pages/explore/index.page'
import { useEffect, useState } from 'react'
import { Rating as RatingInfo, User as UserPrisma } from '@prisma/client'
import { api } from '@/lib/axios'
import { LoginModal } from '../LoginModal'
import { ReviewFormCard } from './components/ReviewFormCard'

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

  const [isModalOpen, setIsModalOpen] = useState(false)

  async function openModal() {
    setIsModalOpen(true)
  }

  async function closeModal() {
    setIsModalOpen(false)
  }

  const session = true

  const [reviewFormIsVisible, setReviewFormIsVisible] = useState(false)

  async function handleChangeReviewFormVisibility() {
    setReviewFormIsVisible((state) => !state)
  }

  return (
    <Container>
      {isModalOpen && <LoginModal onClose={closeModal} />}

      <ContainerOverlay onClick={handleCloseMenu} />

      <SideMenu>
        <CloseButton
          title="Fechar menu lateral"
          type="button"
          onClick={handleCloseMenu}
        >
          <X size={24} />
        </CloseButton>
        <BookCard book={book} />

        <Title>
          <span>Avaliações</span>
          <LoginButton
            onClick={session ? handleChangeReviewFormVisibility : openModal}
          >
            <strong>Avaliar</strong>
          </LoginButton>
        </Title>

        {reviewFormIsVisible && (
          <ReviewFormCard onClose={handleChangeReviewFormVisibility} />
        )}

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
